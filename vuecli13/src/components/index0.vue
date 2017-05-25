<template>
    <div class="div1">
        {{mag}}
      <p><router-view></router-view></p>
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "我是子页面公共部分"
            }
        }
    }
</script>


<style scoped>

</style>
