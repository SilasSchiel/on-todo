<template>
  <div class="body">
    <div class="header">
      <h1>on.todo</h1>
    </div>
    <div class="dashboard">
      <input id="search-field" type="text" placeholder="Suche nach Notizen" >
    </div>
    <div>
      <AllNotes></AllNotes>
    </div>
    <div class="btn" @click="openAddNotes()">
       <div class="plus-btn">
          +
       </div>
    </div>
  </div>
  <div v-if="this.isAddNotesOpen">
    <AddNotes></AddNotes>
  </div>
</template>

<script>

import AddNotes from './components/AddNotes.vue';
import AllNotes from './components/AllNotes.vue';

export default {

  name: 'App',
  components: {
    AllNotes,
    AddNotes
  },
  data() {
    return {
      isAddNotesOpen: false,
    }
  },
  methods: {
    openAddNotes() {
      this.isAddNotesOpen = true;
    }
  }
}
</script>

<style>

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #1c1132, #2e1f55);
  padding-right: 16px;
  padding-left: 16px;
  box-sizing: border-box;
}

.header {
  color: #fff;
  height: 100px;
}

h1 {
  padding-top: 30px;
}

#search-field {
  width: 100%;
  border-radius: 20px;
  background-color: #CCC2FE;
  height: 50px;
  border: unset;
  padding: 2px 8px;
  box-sizing: border-box;
}

#search-field:focus {
  border: unset;
}

.btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

.plus-btn {
  border-radius: 50%;
  font-size: 30px;
  background-color: #7E64FF;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

</style>
