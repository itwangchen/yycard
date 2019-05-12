<template>
  <div>
    <div class="bg">
      <!-- <div class="bg_top"></div>
      <div class="bg_bottom"></div> -->
    </div>
    <div class="main">
      <!-- 技师卡片 -->
      <div class="technicianCrad">
        <div class="top">
          <img src="../assets/images/1.jpg" class="fl" alt="">
          <div class="techniciantitle">
            <div class="techniciantitle_top">
              <h3 class="fl">柴青青</h3>
              <ul class="fl">
                <li><img src="../assets/images/x1.png" alt=""></li>
                <li><img src="../assets/images/x1.png" alt=""></li>
                <li><img src="../assets/images/x1.png" alt=""></li>
                <li><img src="../assets/images/x1.png" alt=""></li>
                <li><img src="../assets/images/x.png" alt=""></li>
              </ul>
              <span class="fr distance">1.5km</span>
            </div>
            <div class="serverNum">
              <span>从业5年</span>
              <span>|</span>
              <span>服务238次</span>
            </div>
          </div>
        </div>
        <div class="info">
          <span class="lef">
            <img src="../assets/images/dun.png" alt="">
          </span><span class="rig"><img src="../assets/images/dun.png" alt=""></span>
          <div class="inner">
            中医按摩师，毕业于甘肃中医学院，师从北派传人金建军先生，高级按摩师、中医针灸师，从事针灸推拿十六年。擅长运用中医推拿、五经砭术、五行灸、三焦罐等中医外治法，调理颈椎病、肩周炎、腰腿疼、头疼、失眠、肠胃病，小儿常见病。<span
              id="infos">...查看全部</span>
          </div>
        </div>
      </div>
      <!-- 技师预约 -->
      <ul class="techNav">
        <li class="yyTime"><span class="title">可约时间</span><span>
          </span><span>今日
            14:45:00</span>
          <span class="fr">
          </span>
        </li>
        <li class="address">
          <span class="title">服务商圈</span>
          <span>
          </span>
          <span>北京-望京片区</span>
          <span class="fr">
          </span>
        </li>
      </ul>
      <ul class="nav" id="tab">
        <li class="active">服务介绍 <span></span></li>
        <li>顾客评价<span></span></li>
        <li>资格认证<span></span></li>
      </ul>
      <!-- 服务介绍 -->
      <ul class="con goodsBox" style="display:block">
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn" @click="tag">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">378</span>
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">3678</span>
            </p>
          </div>
        </li>
        <li><van-search placeholder="请输入搜索关键词" v-model="value" /></li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">378</span>
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">378</span>
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>286.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">37998</span>
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">378</span>
            </p>
          </div>
        </li>
        <li>
          <img src="../assets/images/1.jpg" alt="">
          <div class="goodsInfo">
            <h3>驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除驱寒除湿疏通经络驱寒除</h3>
            <p class="infotext">适用：放松全身解除疲劳疲劳疲…</p>
            <p class="time"><img src="../assets/images/clock.png" alt=""><span>服务时长：<strong>60分钟</strong></span>
              <span class="btn">预约</span>
            </p>
            <p class="total">
              <em>¥</em>
              <strong>28.<span>88</span></strong>
              <span class="appointment">人已约</span>
              <span class="num">378</span>
            </p>
          </div>
        </li>

        <li>
          <p>没有更多了</p>
        </li>
      </ul>
      <!-- 顾客评价 -->
      <div class="con evaluate">
        <ul>
          <li>
            <img src="../assets/images/1.jpg" alt="">
            <div class="evaluateinfo">
              <p class="name">巴拉巴拉小魔仙 <span>2018-12-17</span></p>
              <div class="score">
                <span>打分</span>
                <ul class="fl">
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x.png" alt=""></li>
                </ul>
              </div>
              <p class="server">
                <span>服务</span>
                <span>藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐</span>
              </p>
            </div>
          </li>
          <li>
            <img src="../assets/images/1.jpg" alt="">
            <div class="evaluateinfo">
              <p class="name">巴拉巴拉小魔仙 <span>2018-12-17</span></p>
              <div class="score">
                <span>打分</span>
                <ul class="fl">
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x.png" alt=""></li>
                </ul>
              </div>
              <p class="server">
                <span>服务</span>
                <span>藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐</span>
              </p>
            </div>
          </li>
          <li>
            <img src="../assets/images/1.jpg" alt="">
            <div class="evaluateinfo">
              <p class="name">巴拉巴拉小魔仙 <span>2018-12-17</span></p>
              <div class="score">
                <span>打分</span>
                <ul class="fl">
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x.png" alt=""></li>
                </ul>
              </div>
              <p class="server">
                <span>服务</span>
                <span>藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐</span>
              </p>
            </div>
          </li>
          <li>
            <img src="../assets/images/1.jpg" alt="">
            <div class="evaluateinfo">
              <p class="name">巴拉巴拉小魔仙 <span>2018-12-17</span></p>
              <div class="score">
                <span>打分</span>
                <ul class="fl">
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x.png" alt=""></li>
                </ul>
              </div>
              <p class="server">
                <span>服务</span>
                <span>藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐</span>
              </p>
            </div>
          </li>
          <li>
            <img src="../assets/images/1.jpg" alt="">
            <div class="evaluateinfo">
              <p class="name">巴拉巴拉小魔仙 <span>2018-12-17</span></p>
              <div class="score">
                <span>打分</span>
                <ul class="fl">
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x1.png" alt=""></li>
                  <li><img src="../assets/images/x.png" alt=""></li>
                </ul>
              </div>
              <p class="server">
                <span>服务</span>
                <span>藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐藏药/玫瑰牛奶泡脚套餐</span>
              </p>
            </div>
          </li>

        </ul>
        <p>没有更多了</p>
      </div>
      <!-- 资格认证 -->
      <div class="con qualifications">
        <ul>
          <li><img src="../assets/images/1.jpg" alt=""><span>健康证</span></li>
          <li><img src="../assets/images/1.jpg" alt=""><span>修脚证</span></li>
          <li><img src="../assets/images/1.jpg" alt=""><span>推拿证</span></li>
        </ul>
        <p>没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'home',
    data() {
      return {
        value:''
      }
    },
    mounted() {
      var tab = document.getElementById("tab");
      var lis = tab.getElementsByTagName('li');
      var cons = document.getElementsByClassName('con');
      for (var i = 0; i < lis.length; i++) {
        lis[i].num = i;
        lis[i].onclick = function () {
          for (var j = 0; j < cons.length; j++) {
            cons[j].style.display = 'none';
            lis[j].className = "";
          }
          lis[this.num].className = "active";
          cons[this.num].style.display = 'block';
        }
      }
      var navTop = $('.nav').offset().top
        $(window).scroll(function () {
            //吸顶盘效果
            if ($(document).scrollTop() > navTop) {
                $(".nav").css({ "position": "fixed", "top": "-.16rem", "z-index": "20", })
            } else {
                $(".nav").css({ "position": "static" })
            }
        })
        $('#infos').click(function () {
            $('.inner').css({ '-webkit-line-clamp': 'unset', 'height': 'auto' })
            $(this).hide()
        })
    },
    methods: {
      tag() {
        this.$router.push('/info')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    box-sizing: border-box;
  }

  /* @font-face {
    font-family: 'Montserrat-Bold';
    src: url('../font/Montserrat-Bold.otf');
    font-weight: normal;
    font-style: normal;
  } */

  /* @font-face {
    font-family: 'Montserrat-Medium';
    src: url('../font/Montserrat-Medium.otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat-Regular';
    src: url('../font/Montserrat-Regular.otf');
    font-weight: normal;
    font-style: normal;
  } */

  .main {
    left: 0;
    right: 0;
    top: .12rem;
    bottom: 0;
    margin: auto;
    position: absolute;
  }

  .technicianCrad {
    margin-top: .2px;
    width: 6.86rem;
    margin: 0 auto;
    overflow: hidden;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0.2rem 0.4rem 0rem rgba(154, 133, 129, 0.18);
    border-radius: .24rem;
  }

  .bg {
    width: 100%;
    height: 2.7rem;
    position: relative;
    overflow: hidden;
    position: absolute;
    background: url(../assets/images/jishibgh5.png) no-repeat 100%/100%;
    top: 0;
  }



  .bg_bottom {
    width: 100%;
    height: 120px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20%;
    top: 80%;
    position: absolute;
  }

  .fl {
    float: left !important;
  }

  .fr {
    float: right !important;
  }

  .technicianCrad .top {
    height: 1.74rem;
    padding: .32rem;
  }

  .technicianCrad .top>img {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    background: rgba(243, 243, 243, 1);
    border-radius: .16rem;
  }

  .techniciantitle h3 {
    width: 1.08rem;
    margin-right: .12rem;
    height: .5rem;
    font-size: .36rem;
    font-family: PingFangSC-Semibold;
    font-weight: 700;
    color: rgba(44, 44, 44, 1);
    line-height: .50rem;
  }

  .techniciantitle .distance {
    font-size: .28rem;
    font-family: Montserrat-Bold;
    font-weight: bold;
    color: rgba(107, 107, 107, 1);
  }

  .techniciantitle ul>li>img {
    width: .28rem;
    height: .28rem;

  }

  .techniciantitle ul>li {
    height: .5rem;
    line-height: .5rem;
  }

  .techniciantitle ul li {
    float: left;
    padding-top: .05rem;
  }

  .techniciantitle_top {
    overflow: hidden;
    height: .5rem;
    margin-left: 1.27rem;

  }

  .techniciantitle_top ul {
    padding-left: .22rem;
  }

  .techniciantitle_top h3,
  .techniciantitle_top ul>li,
  .distance {
    height: .5rem;
    line-height: .5rem;
    margin-right: 0.04rem;
  }

  .serverNum {
    padding-left: 1.27rem;
    height: .72rem;
    margin-top: .2rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(107, 107, 107, 1);
    line-height: .40rem;
    border-bottom: .01rem #f5f5f5 solid;
  }

  .serverNum span:nth-child(2) {
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(209, 209, 209, 1);
  }

  .info {
    width: 6.86rem;
    text-align: center;
    margin: 0 auto;
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(107, 107, 107, 1);
    line-height: .40rem;
    padding: .57rem 0.66rem;
    position: relative;
  }

  .info span {
    font-size: .17rem;
    color: rgba(123, 123, 123, 1);
    position: absolute;
  }

  .info span img {
    width: .17rem;
  }

  .info .lef {
    transform: rotate(180deg);
    top: .18rem;
    left: .36rem;
  }

  .info .rig {
    bottom: .20rem;
    right: .4rem;
  }

  .info .inner {
    height: .8rem;
    padding-left: .08rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: left;
  }

  #infos {
    position: absolute;
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    bottom: .59rem;
    background: #fff;
    right: .7rem;
    color: #4A90E2;
  }

  .techNav {
    border-bottom: .16rem rgba(247, 247, 247, 1) solid;
    overflow: hidden;
  }

  .techNav>li {
    overflow: hidden;
    width: 6.78rem;
    margin: 0 auto;
    line-height: 1.28rem;
    height: 1.28rem;
  }

  .techNav>li span {
    display: block;
    float: left;
    height: 1.28rem;
    line-height: 1.28rem;
  }

  .techNav .yyTime {
    border-bottom: .02rem solid #F5F5F5;
  }

  .yyTime span:nth-child(3) {
    font-family: Montserrat-Bold !important;
  }

  .yyTime .title,
  .address .title {
    font-size: .32rem;
    font-family: PingFangSC-Semibold;
    font-weight: 700;
    color: rgba(107, 107, 107, 1);
  }

  .techNav li span:nth-child(2) {
    overflow: hidden;
    /* margin-top: .05rem; */
    line-height: 1.4rem;
    margin-left: 0.28rem;
    width: .43rem;

  }

  .techNav .yyTime span:nth-child(2) {
    background: url(../assets/images/time.png) no-repeat;
    background-size: .36rem;
    background-position: center;
  }

  .techNav .address span:nth-child(2) {
    background: url(../assets/images/address.png) no-repeat;
    background-size: .36rem;
    background-position: center;
  }

  .techNav li span:nth-child(3) {
    margin-left: .32rem;
    font-size: .32rem;
    font-family: PingFangSC-Semibold;
    font-weight: 800;
    width: 4.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: rgba(44, 44, 44, 1);
  }


  .techNav li span:nth-child(4) {
    background: url(../assets/images/rig.png) no-repeat;
    background-size: .24rem;
    background-position: center;
    width: .24rem;
  }



  .nav {
    display: flex;
    margin-top: .16rem;
    background: #fff;
  }

  .nav span {
    width: .68rem;
    height: .12rem;
    background: linear-gradient(270deg, rgba(241, 158, 131, 1) 0%, rgba(223, 101, 76, 1) 100%);
    opacity: 0.6;
    position: absolute;
    left: .91rem;
    bottom: .24rem;
    display: none;
  }

  .nav li {
    font-size: .32rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(107, 107, 107, 1);
    position: relative;
    text-align: center;
    line-height: .88rem;
    width: 2.5rem;

  }

  .nav .active {
    font-size: .32rem;
    font-family: PingFangSC-Semibold;
    font-weight: 800;
    color: rgba(44, 44, 44, 1);
  }

  .nav .active span {
    display: block;
  }

  .goodsBox {
    overflow: hidden;
  }

  .goodsBox li {
    /* overflow: hidden; */
    height: 2.88rem;
    width: 6.86rem;
    margin: 0 auto;
    padding-bottom: .32rem;
    border-bottom: .02rem #F5F5F5 solid;
  }

  .goodsBox li:last-child {
    height: 1rem !important;
    border: none;
  }

  .goodsBox li>img {
    display: block;
    width: 2.16rem;
    border-radius: .16rem;
    height: 2.16rem;
    float: left;
  }

  .goodsBox li>img {
    margin-top: .36rem;
  }

  .goodsInfo {
    float: left;
    margin-left: .28rem;
    margin-top: .36rem;
  }

  .goodsInfo h3 {
    height: .45rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 4.42rem;
    line-height: .45rem;
    font-size: .32rem;
    font-family: PingFangSC-Semibold;
    font-weight: 800;
    color: rgba(44, 44, 44, 1);
  }

  .goodsInfo .time {
    width: 4.42rem;
    margin-top: 0.1rem;
  }

  .goodsInfo .infotext {
    margin-top: 0.08rem;
    width: 4.20rem;
    height: .40rem;
    font-size: .28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(107, 107, 107, 1);
    line-height: .40rem;
  }

  .goodsInfo .time img {
    height: .24rem;
    width: .24rem;
    margin-right: .06rem;
    transform: translateY(.04rem);

  }

  .goodsInfo .time strong {
    font-size: .24rem;
    font-family: PingFangSC-Regular;
    font-weight: 700 !important;
    color: rgba(155, 155, 155, 1);
  }

  .goodsInfo .time span {
    height: .33rem;
    font-size: .24rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: .33rem;

  }

  .goodsInfo .total {
    width: 4.42rem;
    height: .6rem;
    overflow: hidden;
    line-height: .6rem;
  }

  .goodsInfo .time .btn {
    display: block;
    text-align: center;
    font-size: .28rem;
    line-height: .6rem;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    float: right;
    width: 1.28rem;
    height: .60rem;
    background: linear-gradient(90deg, rgba(224, 86, 63, 1) 0%, rgba(255, 121, 84, 1) 100%);
    /* box-shadow: 0rem .10rem .20rem 0rem rgba(253, 164, 146, 1); */
    border-radius: .30rem;
  }

  .total strong,
  .total em {
    color: rgba(223, 101, 76, 1);
  }

  .total em {
    font-family: Montserrat-Bold;
    font-size: .18rem;
    font-weight: 600;
  }

  .total strong {
    font-size: .36rem;
    font-family: Montserrat-Bold;
    font-weight: bold;
    display: inline-block;
    width: 1.35rem;
    transform: translateX(-.04rem);
  }

  .total strong span {
    font-size: .24rem;
  }

  .total .num {
    font-size: .24rem;
    font-family: Montserrat-Bold;
    font-weight: bold;
    float: right;
    color: rgba(107, 107, 107, 1);
  }

  .total .appointment {
    font-size: .24rem;
    color: rgba(107, 107, 107, 1);
    float: right;
  }

  .con {
    display: none;
  }

  .evaluate,
  .qualifications {
    padding: 0 .32rem;
  }

  .evaluate>ul>li {
    width: 6.83rem;
    height: 1.76rem;
    margin-top: .32rem;
    border-bottom: 0.01rem solid #E9E9E9;
  }

  .qualifications li img {
    width: 100%;
    height: 100%;
  }

  .qualifications li {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 6.14rem;
    border-radius: .1rem;
    height: 3.45rem;
    margin-top: 0.32rem;
  }

  .evaluate>ul>li>img {
    float: left;
    /* margin-top: 0.05rem; */
    width: .80rem;
    margin-right: .28rem;
    height: .80rem;
    background: rgba(237, 237, 237, 1);
    border-radius: .16rem;
  }

  .evaluateinfo {
    /* overflow: hidden; */
    width: 5.72rem;
    float: left;
  }

  .evaluateinfo .name {
    height: .26rem;
    line-height: .26rem;
    font-size: .28rem;
    margin-top: .03rem;
    font-family: PingFangSC-Semibold;
    font-weight: 800;
    color: #6b6b6b;
  }

  .evaluateinfo .name span {
    font-size: .24rem;
    font-family: Montserrat-Medium;
    font-weight: 500;
    color: rgba(155, 155, 155, 1);
    float: right;
  }

  .score span:nth-child(1),
  .server span:nth-child(1) {
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    float: left;
    margin-right: 0.18rem;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
  }

  .score {
    overflow: hidden;
    width: 5.1rem;
    margin-top: .22rem;
  }

  .score span {
    float: left;
  }

  .score ul {
    margin-top: .05rem;
    width: 3rem;
    height: .28rem;
    float: left;
  }

  .evaluateinfo .score ul li {
    width: .28rem;
    height: .28rem;
    margin-right: .08rem;
    float: left;
  }

  .qualifications span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 6.14rem;
    height: 1rem;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    opacity: 0.5;
  }

  .qualifications p,
  .evaluate>p,
  .goodsBox>li>p {
    margin-top: .32rem;
    margin: 0 auto;
    width: 1.54rem;
    height: .72rem;
    font-size: .28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: .72rem;
    text-align: center;
  }

  .server span:nth-child(2) {
    font-size: .28rem;
    display: block;
    float: left;
    width: 4.96rem;
    font-family: PingFangSC-Semibold;
    font-weight: 800;
    color: #6b6b6b;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .server {
    margin-top: .1rem;
  }
</style>