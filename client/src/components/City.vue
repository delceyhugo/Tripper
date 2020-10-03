<template>
    <h3 id="city">{{ content }}</h3>
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
h3{
    font-size: 20px;
}
</style>