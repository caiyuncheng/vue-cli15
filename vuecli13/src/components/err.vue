<template>
    <div class="div1">
        {{mag}}
         <h2>{{num}}</h2>
         <p>秒后跳转到<router-link to="/">首页</router-link></p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "我是404也面",
                num:10
            }
        },
       created(){
            this.down(this);
       },
       methods:{
           down(vue1){
               var idx = vue1.num;
               var popo=setInterval(function () {
                   console.log(111);
                 if(vue1.num>0 && idx == vue1.num){
                   vue1.num--;
                   idx =vue1.num;
                 }else{
                     if(vue1.num == 0){
                         vue1.$router.push("/");
                     }
                     clearInterval(popo);
                 }
               },1000);
           }
       },
      beforeDestroy(){
           this.num = 10;
//           console.log(222);
      }
    }
</script>


<style scoped>

</style>
