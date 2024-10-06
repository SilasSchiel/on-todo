<template>
    <div class="add-notes-container">
        <div class="add-notes-header">
            <img @click="$emit('close')" src="./../assets/arrow.svg" alt="">
        </div>
        <h1>Neue Notiz hinzufügen</h1>
        <div class="form">
            <input id="title" type="text" placeholder="Titel hinzufügen" v-model="title">
            <textarea id="text" placeholder="Deinen Text hier eingeben..." v-model="text"></textarea>
        </div>
        <div class="btn" @click="addNote()">
            <div class="plus-btn">
                <img src="./../assets/message.svg" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>

  import { collection, addDoc } from 'firebase/firestore';
  import { db } from './../firebase';

  export default {    

    data() {
        return {
            title: '',
            text: '',
        }
    },
    methods: {
        async addNote() {
            await addDoc(collection(db, 'notes'), {
                title: this.title, text: this.text
            });
        }
    }
  };
</script>
  
<style scoped>
    .add-notes-container {
        background-color: #7E64FF;
        z-index: 2;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 30px 16px;
        box-sizing: border-box;
    }

    .add-notes-header {
        display: flex;
        justify-content: flex-start;
    }

    img {
        width: 30px;
    }

    h1 {
        color: #fff;
    }

    .form {
        margin-top: 30px;
    }

    #title {
        width: 100%;
        border-radius: 20px;
        background-color: #CCC2FE;
        height: 50px;
        border: unset;
        padding: 2px 8px;
        font-size: 16px;
        box-sizing: border-box;
    }

    #text {
        width: 100%;
        height: 300px;
        border-radius: 20px;
        background-color: #CCC2FE;
        border: unset;
        padding: 16px 8px;
        box-sizing: border-box;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        margin-top: 16px;
    }

    .btn {
        position: absolute;
        bottom: 16px;
        right: 16px;
    }

    .plus-btn {
        border-radius: 50%;
        font-size: 30px;
        background-color: #CCC2FE;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }

</style>