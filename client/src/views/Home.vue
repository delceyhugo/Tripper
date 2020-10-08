<template>
    <div id="home" class="container-fluid">
        <!-- Header -->
        <top-header></top-header>

        <!-- Form -->
        <div class="form row justify-content-md-center">
            <div class="col-5 text-input">
                <select v-model="form.newType" name="typeSelect" id="type-select"> 
                        <option value="" disabled> Type </option>                 
                        <option value="country">Country</option>
                        <option value="state">State</option>
                        <option value="city">City</option>
                        <option value="place">Place</option>
                </select>
                <input v-on:keyup.enter="addLocation" v-model="form.newContent" autocomplete="off" style="text" id="locationData-name" placeholder="Location's name">
                <svg v-on:click="addLocation" width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-plus-square" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
        </div>

        <!-- List -->
        <div class="list ">
            <div class="row justify-content-md-center">
                <drag-and-drop class="col-8" v-model="locationData" />
            </div>
        </div>

        <!-- Footer -->
        <down-footer></down-footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import DragAndDrop from "../components/DragAndDrop";


// location in VueX
// Get location -> 


export default {
    data() {
        return {
            form: {
                newType: '',
                newContent: "",
                newId: "",
                elements: []
            },
        }
    },
    components: {
        'top-header' : Header,
        'down-footer': Footer,
        'drag-and-drop': DragAndDrop
    },
    computed: {
        locationData: {
            get() {
                console.log('Getting data')
                return this.$store.state.locationData
            },
            set(data){
                this.$store.dispatch("updateLocation", data);
            }
        }
    },
    methods: {
        // Add a input location in a array
        addLocation: function(){
            if(this.form.newType !== null && this.form.newContent !== ''){
                this.generateId()
                let newPlace = new Object()
                newPlace.type = this.form.newType
                newPlace.name = this.form.newContent
                newPlace.id = this.form.newId
                newPlace.elements = []
                this.locationData.push(newPlace)
                this.form.newContent = ""
            }
        },
        // Generate an Id for a added locationData
		generateId: function(){
            let charset = "0123456789"
            this.form.newId = ""; 
            for (var i = 0; i < 6; i++) {
                this.form.newId += charset.charAt(Math.floor(Math.random() * charset.length));
            }
        },
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
    border: solid 5px darkgray;
}
.delete-button{
    position: absolute;
    top: 25%;
    right: 20px;

    display: inline;
    fill: #cc9a9a;
    font-size: 30px;
    transition: color 0.2s ease-out;
}
.delete-button:hover{
    fill: #af5757;
}

</style>