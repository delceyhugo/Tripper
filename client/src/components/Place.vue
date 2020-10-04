<template>
    <li>
        <div class="wrapper col-5">
            <h4 id="place">{{ content }}</h4>
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
h4{
    font-size: 20px;
    font-style: italic; 
}
</style>