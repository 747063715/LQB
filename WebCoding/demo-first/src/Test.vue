<template>
    <div class="text-box">
        <h3>这是自定义的组件{{userName}}</h3>
        
    </div>
</template>


<script>
    export default{
        data(){
            return {
                userName: '张三',
            }
        }
    }
</script>

<style>
.text-box {
    background-color: pink;
}


</style>