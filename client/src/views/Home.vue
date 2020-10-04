<template>
    <div id="home" class="container-fluid">
        <!-- Header -->
        <top-header></top-header>

        <!-- Form -->
        <div class="form row justify-content-md-center">
            <div class="col-5 text-input">
                <select v-model="form.newType" name="typeSelect" id="type-select"> 
                        <option value="null" selected disabled hidden> Type </option>                 
                        <option value="country">Country</option>
                        <option value="state">State</option>
                        <option value="city">City</option>
                        <option value="place">Place</option>
                </select>
                <input v-on:keyup.enter="addLocation" v-model="form.newContent" autocomplete="off" style="text" id="location-name" placeholder="Location's name">
                <svg v-on:click="addLocation" width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-plus-square" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
        </div>

        <!-- List -->
        <div class="list ">
            <component class="place row justify-content-md-center draggable"
            v-for="(data, index) in sortedLocation" 
            :key="index" 
            draggable="true" 
            v-bind:is="data.type" 
            v-bind:id="data.id" 
            v-on:dragstart="dragStart(index, $event)"
            v-on:dragover.prevent 
            v-on:dragenter="dragEnter" 
            v-on:dragleave="dragLeave" 
            v-on:dragend="dragEnd" 
            v-on:drop="dragFinish(index, $event)"
            :content=data.content>
            </component>
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
            options: {
                dropzoneSelector: 'ul',
                draggableSelector: 'li',
            },
            charset: "0123456789",
            sortedLocation: [],
            dragging: -1
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
        // Add a input location in a array
        addLocation: function(){
            if(this.form.newType !== null){
                this.generateId()
                let newPlace = new Object()
                newPlace.type = this.form.newType
                newPlace.content = this.form.newContent
                newPlace.id = this.form.newId
                this.sortedLocation.push(newPlace)
                this.form.newContent = ""
            }
        },
        // Generate an Id for a added location
		generateId: function(){
            this.form.newId = ""; 
            for (var i = 0; i < 6; i++) {
                this.form.newId += this.charset.charAt(Math.floor(Math.random() * this.charset.length));
            }
        },


        dragStart(which, ev) {
            console.log("dragStart")
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnter(ev) {
            console.log("dragEnter")
            if (ev.clientY > ev.target.height / 2) {
                ev.target.style.marginBottom = '10px'
            } else {
                ev.target.style.marginTop = '10px'
            }
        },
        dragLeave(ev) {
            console.log("dragLeave")
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        dragEnd(ev) {
            console.log("dragEnd")
            this.dragging = -1
            return ev
        },
        dragFinish(to, ev) {
            console.log("dragFinish")
            this.moveItem(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItem(from, to) {
            console.log("moveItem")
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.todos.splice(to, 0, this.todos.splice(from, 1)[0]);
            }
        }
    },
    
}
</script>





<style scoped >
#home{
    width: 100%;
    height: 100%;
}


/* Form */
select, select:hover{
    width: 15%;
    height: 100%;
    border: none ;
    outline: none ;
    box-shadow: inset 0 0 0 5px #fff !important;
    font-size: 18px;
}
input, input:active, input:focus {
    text-align: center;
    padding: 0px 50px 0px 0px;
    text-decoration: none;
    width: 75%;
    height: 99%;
    border: none;
    outline: none;
    font-size: 25px;
}
.form{
    padding-top: 60px !important;
}
.text-input{
    background: white;
    width: 100%;
    height: 60px;
    border: none;
    padding: 5px 5px;
    border-radius: 4px;
    margin-bottom: 30px;
}
option{
    color:black;
}
svg{
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
}


/* List */
.place{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
}
li{
    list-style-type: none;
}
.over{
    border: solid 5px darkgray
}

</style>