<template>
    <div class="div1">
        {{mag}}{{$route.params.a}}{{$route.params.b}}
    </div>
</template>

<script>
    export default {
        name: 'div1',
        data (){
            return {
                mag: "我接受到的参数为:"
            }
        }
    }
</script>


<style scoped>

</style>
