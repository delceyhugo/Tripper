<template>
    <h2 id="state">{{ content }}</h2>
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