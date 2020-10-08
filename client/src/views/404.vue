<template>
    <div id="not-found" v-on:mousemove="someMethod">
        <div class="text">
            <h1 class="text">404 <br> Not Found</h1>
        </div>
        <div class="torch"></div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {
            
        }
    },
    methods: {
        someMethod : function(event) {
            document.querySelector('.torch').style.top = (event.pageY + 'px')
            document.querySelector('.torch').style.left = (event.pageX + 'px')
        }
    }
}
</script>

<style scoped>
#not-found{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #111313, #28292b);
}
div.text{
    color: #111313;
    padding-top: 35vh;
}
h1{
    font-size: 80px;
    font-weight: 800;
    user-select: none;
    color: beige;
    text-shadow: -5px 5px 0px rgba(0, 0, 0, 0.7);
}
.torch {
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
    box-shadow: 0 0 0 9999em #000000f7;
    opacity: 1;
    border-radius: 50%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
}
.torch:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    box-shadow: inset 0 0 40px 2px #000, 0 0 20px 4px rgba(13, 13, 10, 0.2);
}

</style>