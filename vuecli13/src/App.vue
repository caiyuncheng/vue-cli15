<template>
  <div id="app" class="app">
    <img src="./assets/logo.png">
    <p>
       <router-link to="/">首页</router-link>
       <router-link to="/index0">子页面</router-link>
       <router-link to="/index1">子页面1</router-link>
       <router-link to="/index2">子页面2</router-link>
       <router-link to="/index6/参数1/参数2">传参</router-link>
       <router-link to="/index20">重定向</router-link>
       <router-link to="/index200">404页面</router-link>
       <router-link to="/index7">http请求</router-link>
    </p>
    <p>
      <a href="javascript:;" @click="goBack">后退</a>
      <a href="javascript:;" @click="goGo">前进</a>
      <a href="javascript:;" @click="goHome">回首页</a>
    </p>


    <router-view ref="hello" @ccc="cclick" @ddd="dclick"></router-view>

    <div class="div2">
       <router-view name="left" @aaa="leftcilck" ref="div4"></router-view>
       <router-view name="right" @bbb="leftcilck" ref="div5"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return{

      }
  },
  methods:{
    goBack(){
        this.$router.go(-1);
    },
    goGo(){
        this.$router.go(1);
    },
    goHome(){
        this.$router.push("/");
    },
    leftcilck(data){
        this.$refs.hello.ccc(data);
    },
    cclick(){
        this.$refs.div4.btn2();
    },
    dclick(){
      this.$refs.div5.btn2();
    }
  }
}
</script>

<style>
  /*样式重置化*/
  body,div,dl,dt,dd,ul,li,h1,h2,h3,h4,h5,h6,p,span,em,i,a,input,form,label,nav,hr,ol{ margin: 0px; padding: 0px;};
  li{list-style: none;}
  a{ text-decoration: none;color: black; outline: 0 none;}
  em,i{ font-style: normal;}
  input{ outline:0 none;}
  img{ vertical-align: top; outline: 0 none;}
  textarea,button{ outline: 0 none;}
  body {
    font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    font-family: "微软雅黑";
    min-width: 1200px;
  }
  /*清浮动样式*/
  .outer {zoom:1;}    /*==for IE6/7 Maxthon2==*/
  .outer:after {clear:both;content:'';display:block;width: 0;height: 0;visibility:hidden;}
  /*去掉一些样式*/
  input[type='number'] {-moz-appearance:textfield;}
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {-webkit-appearance: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
   .app p{ display: flex; justify-content: center; align-items: center; margin: 20px auto;}
   .app p a{ display: block; padding: 8px 15px; border: 1px solid #000; border-radius: 10px; margin-right: 20px;}
   .app p a:nth-last-child(1){ margin-right: 0;}
   .app p a:hover{ background: deepskyblue; border-color: deepskyblue; color: #fff;}
   .app .router-link-exact-active{ background: deepskyblue; border-color: deepskyblue; color: #fff;}
   .div2{ width: 600px; display: flex; justify-content: center; align-items: center; margin:40px auto;}
</style>
