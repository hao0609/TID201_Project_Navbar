<script setup>
import { RouterLink,  } from 'vue-router'
import { ref , } from 'vue'
// import Navbar_V1 from './components/Navbar_V1.vue'
// import Navbar_V2 from './components/Navbar_V2.vue'
// import Navbar_V3 from './components/Navbar_V3.vue'
import alert_user_login from '../alert/alert_user_login.vue'
import alert_user_location from '../alert/alert_user_location.vue'
import alert_L_template from '../alert/alert_L_template.vue'
import alert_mobile_template from '../alert/alert_mobile_template.vue'



const user_login_status = ref(false);         //模擬用戶登入判斷狀態

const time = ref(3);

// 子組件的實例參考
const alert_web_M_userlogin = ref(null);
const alert_web_M_userlocation = ref(null);
const alert_L_template_content = ref(null);
const alert_mobile_template_content = ref(null);

const UserLocationShowAlert = () => {
    alert_web_M_userlocation.value.UserLocationShowAlert();  
}

const UserLoginShowAlert = () => {
    alert_web_M_userlogin.value.UserLoginShowAlert();
}

const Web_L_ShowAlert = () => {
    alert_L_template_content.value.Alert_L_template_ShowAlert();
}

const alert_mobile_ShowAlert = () => {
    alert_mobile_template_content.value.Alert_mobile_template_ShowAlert();
}

// onMounted(() => {
//     setTimeout(() => {
//         if (user_login_status.value === false) {
//             UserLoginShowAlert();               //alert_web_L_content_user.value 就是等於 alert_web_L 組件內容
//         }
//     }, 3000);                                                         //等待 3 秒再判斷是否登入


//     setInterval(() => {
//         if (time.value >= 1 ) {
//             time.value -= 1;
//         }
//     },1000)

// });



</script>




<template>
    <div class="box">

        <!-- <Navbar/> -->
        <!-- <div class="navbar">

        <RouterLink to="/Navbar_V1">V1</RouterLink>
        <RouterLink to="/Navbar_V2">V2(未完成)</RouterLink>
        <RouterLink to="/Navbar_V3">V3</RouterLink>

        </div> -->

        <!-- <div class="time title2 bold">
        判斷用戶未登入時間: {{time}}
        </div> -->

        <!-- <alert_windows/> -->

        <alert_user_login ref="alert_web_M_userlogin"/>
        <alert_user_location ref="alert_web_M_userlocation"/>
        <alert_L_template ref="alert_L_template_content"/>
        <alert_mobile_template ref="alert_mobile_template_content"/>

        <div class="alert">
            <button @click="Web_L_ShowAlert" class="showAlert">alert_web_L</button> 

            <button @click="UserLocationShowAlert" class="showAlert">alert_web_M</button> 

            <button @click="alert_mobile_ShowAlert" class="showAlert">alert_mobile</button> 

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
    color: black;
}

.box > .alert{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    color: black;

}
.time{
text-align: center;
}
.showAlert{

font-family: 'Noto Sans TC', sans-serif;
font-size: 25px;
background-color: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border-radius: 5%;
margin: 10px;
cursor: pointer;

}
</style>