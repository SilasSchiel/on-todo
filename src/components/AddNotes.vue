<template>
    <div class="add-notes-container">
        <div class="add-notes-header">
            <img src="./../assets/arrow.svg" alt="">
        </div>
    </div>
</template>
  
<script>
  export default {
    
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
</style>