<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>


<style>
    @font-face {
        font-family: 'Dela Gothic One';
        src: url('./assets/fonts/DelaGothicOne-Regular.ttf') format('truetype');

        font-family: 'NotoSansTC';
        src: url('./assets/fonts/NotoSansTC-VariableFont_wght.ttf') format('truetype');
    }


    @media screen {
        
    }
</style>

<template>
    <Navbar/>
    <div class="wrapper">
    </div>

</template>
