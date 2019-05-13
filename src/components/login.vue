<template >
  <div>
    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名"
        right-icon="question-o"
      />
      <van-field
        v-model="phone"
        label="手机号"
        left-icon="phone-o"
        placeholder="请输入手机号"
        :error-message="error_message"
        :error="is_error"
      />
      <van-field v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button block size="normal" id="loginBtn" type="info">注册</van-button>
  </div>
</template>
<script>
import $ from "jquery"
export default {
  data() {
    return {
      username: "",
      phone: "",
      error_message: "",
      is_error: false,
      sms: ""
    };
  },
  mounted() {
       $("input").on("click", function() {
        setTimeout(function(){  
            document.body.scrollTop = document.body.scrollHeight;  
        },300)
    })
  },
};
</script>

<style>
#loginBtn {
  width: 7.2rem;
  margin: 0 .15rem;
}
</style>

