<template>
  <div class="iscroll">
    <van-cell-group>
      <van-cell title="详情" is-link to="info"/>
      <van-cell title="登录" is-link to="login"/>
      <van-cell title="单元格" value="内容" label="描述信息"/>
    </van-cell-group>
    <van-cell title="单元格" value="内容" size="large"/>
    <van-cell title="单元格" value="内容" size="large" label="描述信息"/>
    <van-cell title="单元格" icon="location-o" value="内容"/>
    <van-cell title="单元格" is-link/>
    <van-cell title="单元格" is-link value="内容"/>
    <van-cell title="单元格" is-link arrow-direction="down" value="内容"/>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>
    <van-search placeholder="请输入搜索关键词" v-model="value"/>

    <van-cell value="内容" icon="shop-o" is-link>
      <template slot="title">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell title="单元格" icon="location-o" is-link/>
    <van-cell title="单元格">
      <van-icon slot="right-icon" name="search" class="custom-icon"/>
    </van-cell>
    <van-button type="default" @click="show=!show">默认按钮</van-button>
    <!-- <van-popup v-model="show" :overlay-style="overlay" :overlay="true">内容</van-popup> -->
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="`复选框 ${item}`"
          @click="toggle(index)"
        >
          <van-checkbox :name="item" ref="checkboxes"/>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <van-datetime-picker
      v-show="show"
      v-model="currentDate"
      type="datetime"
      @confirm="confirm"
      @cancel="cancel"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
import $ from "jquery"
import axios from 'axios'
export default {
  name: "home",
  data() {
    return {
      value: "",
      show: false,
      checked: true,
      list: ["a", "b", "c"],
      result: ["a", "b"],
      overlay: {
        background: "rgba(0, 0, 0, 0.7)"
      },
      //时间选择器
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
    };
  },
  mounted() {
    $("input").on("click", function() {
        setTimeout(function(){  
          console.log(document.body.scrollHeight);
          
            document.body.scrollTop = document.body.scrollHeight;  
        },300);  

    })
  },
  created() {
    // this.$http.get('http://yycms.test.yyhealth.com/admin/memberLs/getUserInfo',function(res){
    //   console.log(res);      
    // });
   axios.get('/api/admin/memberLs/getUserInfo',function(res){
      console.log(res);      
    });
  },
  methods: {
    tag() {
      this.$router.push("/info");
    },
    toggle(index) {
      //复选方法
      this.$refs.checkboxes[index].toggle();
    },
    confirm(val) {
      //时间选择完成
      console.log(val);
    },
    cancel(val) {
      console.log(val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
</style>