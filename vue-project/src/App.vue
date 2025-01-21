<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar_V1 from './components/Navbar_V1.vue'
// import Navbar_V2 from './components/Navbar_V2.vue'
import Navbar_V3 from './components/Navbar_V3.vue'
import alert_user_login from './alert/alert_user_login.vue'
import alert_user_location from './alert/alert_user_location.vue'
import alert_web_L from './components/alert_web_L.vue'
</script>


<template>
     <RouterView/>
    <div class="box">

        <!-- <Navbar/> -->
        <div class="navbar">
        
        <RouterLink to="/Navbar_V1">V1</RouterLink>
        <RouterLink to="/Navbar_V2">V2(未完成)</RouterLink>
        <RouterLink to="/Navbar_V3">V3</RouterLink>

        </div>

        <!-- <alert_windows/> -->

        <div class="alert">
            <alert_user_login/>

            <alert_user_location/>
        </div>
    
    </div>

</template>

<style>
.box{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.box > .navbar{
    font-family: 'Dela Gothic One';
    flex-wrap: wrap;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    color: black;
}

.box > .alert{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgb(255, 255, 255);
    color: black;

}
</style>

