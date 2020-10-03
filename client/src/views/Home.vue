<template>
    <div id="home">
        <top-header></top-header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="col-12">
                        <label for="type-select" id="type-label">Choose a type of location</label>
                    </div>
                    <div class="col-12">
                        <select v-model="data.type" name="typeSelect" id="type-select">                  
                            <option value="country">Country</option>
                            <option value="state">State</option>
                            <option value="city">City</option>
                            <option value="place">Place</option>
                        </select> 
                    </div>
                </div>      
                <div class="col align-self-end"><input v-model="data.content" style="text" ></div>    
                <div class="col align-self-end text-left"><button v-on:click="addLocation">Add</button></div>  

            </div>
        </div>

        
        
        


        
        <div id="list">
            <div v-for="(data, index) in sortedLocation" :key="index">
            </div>
            <!-- Push input -->
            <country class=""></country>
            <state></state>
            <city></city>
            <place></place>
            <down-footer></down-footer>
        </div>

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
            data: {
                type: null,
                content: "",
                newId: ""
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
            if(this.data.type !== null){
                this.GenerateId()
                this.sortedLocation.push(this.data)
            }
        },
		GenerateId: function(){
            this.data.newId = ""; 
            for (var i = 0; i < 6; i++) {
                this.data.newId += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
            }
        }
    },
    
}
</script>





<style scoped>

.add-location{
    float: ;
}
#home{
    padding-top: 60px;
}
</style>