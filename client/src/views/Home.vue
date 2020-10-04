<template>
    <div id="home">
        <!-- Header -->
        <top-header></top-header>

        <!-- Form -->
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-3"></div>
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
                <div class="col-3"></div>
            </div>
        </div>

        <!-- List -->
        <div id="list">
            <component class="draggable" v-for="(data, index) in sortedLocation" :key="index" draggable="true" v-bind:is="data.type" v-bind:id="data.id" :content=data.content></component>
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
                this.queryEl()
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
        // Setup all trigger for Drag & Drop function
        addEventsDragAndDrop: function(el) {
            el.addEventListener('dragstart', this.dragStart, false);
            el.addEventListener('dragenter', this.dragEnter, false);
            el.addEventListener('dragover', this.dragOver, false);
            el.addEventListener('dragleave', this.dragLeave, false);
            el.addEventListener('drop', this.dragDrop, false);
            el.addEventListener('dragend', this.dragEnd, false);
        },
        queryEl: function(){
            var listItems = document.querySelectorAll('.draggable')
            let self = this;
            [].forEach.call(listItems, function(item) {
                self.addEventsDragAndDrop(item);
            })
        },
        // Drag & Drop function
        dragStart: function(e){
            console.log(e)
            console.log(e.srcElement)
            e.srcElement.style.opacity = '0.4'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('text/html', e.srcElement.innerHTML)
        },
        dragEnter: function(e){
            e.srcElement.classList.add('over');
        },
        dragOver: function(e){
            e.preventDefault()
            e.dataTransfer.dropEffect = 'move'
            return false
            },
        dragLeave: function(e){          
            e.stopPropagation()
            e.srcElement.classList.remove('over')
        },
        dragDrop: function(e){
            console.log("dragDrop")
            console.log(this)
            e.toElement.style.opacity = '1'
            if (e.dataTransfer !== null) {
                // e.toElement.innerHTML = e.srcElement.innerHTML
                // e.srcElement.innerHTML = e.dataTransfer.getData('text/html')
            }
            return false;
        },
        dragEnd: function(e){
            var listItems = document.querySelectorAll('.draggable');
            [].forEach.call(listItems, function(item) {
                item.classList.remove('over');
            });
            e.srcElement.style.opacity = '1';
        },
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
#home{
    padding-top: 60px;
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
.draggable{
    cursor: pointer;
}
.over{
    border: solid 5px darkgray
}
</style>