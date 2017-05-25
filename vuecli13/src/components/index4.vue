<template>
    <div class="div4">
        {{mag}}
        <p><button @click="btn1">左边</button></p>
        <p>{{num}}次</p>
    </div>
</template>

<script>
    export default {
        name: 'div4',
        data (){
            return {
                mag: "我是左边",
                num:0
            }
        },
        methods:{
          btn1(){
              this.$emit("aaa",this.mag);
          },
          btn2(){
              this.num++;
          }
        }
    }
</script>


<style scoped>
   .div4{ width: 50%; height: 100px; background: #f00; color: #fff;}
   .div4 p{ padding: 10px 0 0;}
</style>
