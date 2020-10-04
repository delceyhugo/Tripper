<template>
    <li>
        <div class="wrapper col-5">
            <h3 id="city">{{ content }}</h3>
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
h3{
    font-size: 20px;
}
</style>