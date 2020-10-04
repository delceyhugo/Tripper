<template>
    <li>
        <div class="wrapper col-5">
            <h1 id="country">{{ content }}</h1>
        </div>
    </li>
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
    font-size: 2.2em;
}
.wrapper {
    background: white;
    width: 100%;
    height: 50px;
    padding: 5px 5px;
    border-radius: 4px;
    margin-bottom: 5px;
    color: #333;
}
</style>