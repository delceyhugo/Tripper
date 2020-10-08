<style scoped>
.item-container {
  margin: 0;
}
.item {
  padding: 1rem;
  border: solid black 1px;
  background-color: #2c2c2c;
}
.item-sub {
  margin: 0 2rem;
}
.ghost {
  opacity: 0.5;
  border: dashed rgb(24, 24, 24) 2px;
}
.delete-button{
  float: right;
  padding-bottom: 5px;
  font-size: 30px;
  fill: #cc9a9a;
  transition: color 0.2s ease-out;
}
.delete-button:hover{
  fill: #af5757;
}
</style>

<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="item-group" :key="el.id" v-for="(el, index) in realValue">
      <div class="item">{{ el.name }}
      <svg v-on:click="removeLocation(index)" width="1em" height="1em" viewBox="0 0 16 16" class="delete-button bi bi-x" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </div>
      <drag-and-drop class="item-sub" :index="getIndex(index)" :list="el.elements" />
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "drag-and-drop",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    getIndex: function(index){
      if(this.index == undefined){
        return '[' + index.toString() + ']'
      }
      else{
        return  this.index + '.elements[' + index + ']'
      }
    },
    removeLocation: function(index){
      if(this.index == null){
        this.$store.dispatch("removeLocation", index);
      }
      else{
        let data = [this.index, index]
        this.$store.dispatch("removeLocation", data)
      }
    },
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    },
    index: {
      required: false,
      default: null
    },

  }
};
</script>