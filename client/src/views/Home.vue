<template>
    <div id="home">
        <!-- Header -->
        <top-header></top-header>

        <!-- Form -->
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6 text-input">
                    <select v-model="form.newType" name="typeSelect" id="type-select"> 
                            <option value="null" selected disabled hidden> Type </option>                 
                            <option value="country">Country</option>
                            <option value="state">State</option>
                            <option value="city">City</option>
                            <option value="place">Place</option>
                    </select>
                    <input v-on:keyup.enter="addLocation" v-model="form.newContent" autocomplete="off" style="text" id="location-name" placeholder="Location's name">
                </div>
                <div class="col-3"></div>
            </div>
        </div>

        <!-- List -->
        <div id="list">
            <component class="item" v-for="(data, index) in sortedLocation" :key="index" draggable="true" v-bind:is="data.type" v-bind:id="data.id" :content=data.content></component>
        </div>

        <!-- Footer -->
        <down-footer></down-footer>
    </div>
</template>





<script>

import Header from '../components/Header'
import Country from '../components/Country'
import State from '../components/State'
import City from '../components/City'
import Place from '../components/Place'
import Footer from '../components/Footer'

export default {
    data() {
        return {
            form: {
                newType: null,
                newContent: "",
                newId: ""
            },
            data: {
                type: null,
                content: "",
                id: ""
            },
            charset: "0123456789",
            sortedLocation: [],
        }
    },
    components: {
        'top-header' : Header,
        'country' : Country,
        'state' : State,
        'city' : City,
        'place' : Place,
        'down-footer' : Footer
    },
    methods: {
        addLocation: function(){
            if(this.form.type !== null){
                this.GenerateId()
                let newPlace = new Object()
                newPlace.type = this.form.newType
                newPlace.content = this.form.newContent
                newPlace.id = this.form.newId
                this.sortedLocation.push(newPlace)
            }
        },
		GenerateId: function(){
            this.form.newId = ""; 
            for (var i = 0; i < 6; i++) {
                this.form.newId += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
            }
        }
    },
    
}
</script>





<style scoped >
select, select:hover{
    width: 15%;
    height: 100%;
    border: none ;
    outline: none ;
    box-shadow: inset 0 0 0 5px #fff !important;
}
input, input:active, input:focus {
    text-align: center;
    padding: 0px;
    text-decoration: none;
    width: 85%;
    height: 99%;
    border: none;
    outline: none;
    font-size: 25px;
}
#home{
    padding-top: 60px;
}
.text-input{
    background: white;
    width: 100%;
    height: 60px;
    border: none;
    padding: 5px 5px;
    border-radius: 2px;
    margin-bottom: 30px;
}
select option[data-default]{
    color:grey !important;
}
option{
    color:black;
}

.item{
    cursor: pointer;
}
.hold{
    border: solid 5px darkgray
}
</style>