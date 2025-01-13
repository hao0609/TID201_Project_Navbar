<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar_V1 from './components/Navbar_V1.vue'
// import Navbar_V2 from './components/Navbar_V2.vue'
import Navbar_V3 from './components/Navbar_V3.vue'


</script>


<template>
<RouterView/>
    <div class="box">
    <RouterLink to="/Navbar_V1">V1</RouterLink>
    <RouterLink to="/Navbar_V2">V2(未完成)</RouterLink>
    <RouterLink to="/Navbar_V3">V3</RouterLink>
    <!-- <Navbar/> -->
    
    </div>

</template>

<style>
.box{
    width: 100%;
    height: 100vh;
    font-family: 'Dela Gothic One';
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    color: black;

}
</style>