<template>
    <div class="div5">
        {{mag}}
         <p><button @click="btn1">右边</button></p>
        <p>{{num}}次</p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "我是右边",
                num:0
            }
        },
        methods:{
            btn1(){
                this.$emit("bbb",this.mag);
            },
            btn2(){
                this.num++;
            }
        }
    }
</script>


<style scoped>
  .div5{ width: 50%; height: 100px; background: #000; color: #fff;}
  .div5 p{ padding: 10px 0 0;}
</style>
