<template>
    <div class="div1">
        {{mag}}{{txt}}
        <p>
           <button @click="btn1">获取数据</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "从服务器申请到的数据为:",
                txt:""
            }
        },
        methods:{
            btn1(){
                var vue1 = this;
                vue1.$http.post(vue1.$Api+"/user",{
                    name:"哈哈哈哈哈"
                })
                  .then(function (response) {
                    var response = response.data;
                    vue1.txt = response.name+response.txt;
                })
                  .catch(function (err) {
                     console.log(err);
                })
            }
        }
    }
</script>


<style scoped>
    .div1 p{ margin-top: 40px;}
</style>
