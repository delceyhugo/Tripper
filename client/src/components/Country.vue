<template>
    <h1 id="country">{{ content }}</h1>
</template>

<script>
export default {
    name: "Country",
    data() {
        return {
            
        }
    },
    props: ['content'],
    
}
</script>

<style scoped>
h1{
    font-size: 50px;
    text-shadow: 3px 3px 5px black ;
}
</style>