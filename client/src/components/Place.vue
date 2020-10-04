<template>
    <h4 id="place">{{ content }}</h4>
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
h4{
    font-size: 20px;
    font-style: italic; 
}
</style>