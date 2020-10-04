<template>
    <li>
        <div class="wrapper col-5">
            <h2 id="state">{{ content }}</h2>
        </div>
    </li>    
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['content'],
}
</script>

<style scoped>
h2{
    font-size: 30px;
}
</style>