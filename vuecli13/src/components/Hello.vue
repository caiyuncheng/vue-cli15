<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{txt}}{{txts}}{{num}}</p>
    <p><button @click="btn1">左边点击</button><button @click="btn2">右边点击</button></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
      return{
          msg:"欢迎来到首页",
          txt:"我接受到的点击为:",
          txts:"",
          num:0
      }
  },
  methods:{
      ccc(data){
          this.txts = data;
          this.num++;
      },
      btn1(){
          this.$emit("ccc");
      },
      btn2(){
          this.$emit("ddd");
      }
  }
}
</script>

<style scoped>
   .hello p{ padding-top: 10px;}
   .hello p button{ margin-right: 20px;}
   .hello p button:nth-last-of-type(1){ margin-right: 0;}
</style>
