
<script setup>
import icon_purple from './icons/icon_purple.vue' 
import icon_white from './icons/icon_white.vue';
import shopping_cart from './icons/shopping_cart.vue' 
import user from './icons/user.vue' 
// import hamburger from './icons/hamburger.vue'

import { ref } from 'vue';

const checked = ref(false);
const rwd_menu = ref(null);
const rwd_menu_bg = ref(null);
// const header = ref(null);

const checked_change = () => {

    
    if (checked.value === true ) {

        rwd_menu.value.style.visibility = 'visible';
        rwd_menu_bg.value.style.transform = 'scale(1)';
        rwd_menu.value.style.transform = 'scale(1)';
        // header.value.style.backgroundColor = '#e0c4ee';

        

    } else if (checked.value === false ) {
        rwd_menu.value.style.visibility = 'hidden';
        rwd_menu_bg.value.style.transform = 'scale(0)';
        rwd_menu.value.style.transform = 'scale(0)';
        // header.value.style.backgroundColor = 'black';
    }
};

</script>


<template>
    <header>
        <!-- <icon_white :textFill="checked ? '#8C25C0' : 'white'" /> -->
        <icon_white/>
        <nav>
            <ul class="menu">
                <li><RouterLink to="/" >景點介紹</RouterLink></li>
                <li><RouterLink to="/">積分任務</RouterLink></li>
                <li><RouterLink to="/">商城</RouterLink></li>
                <li><RouterLink to="/">最新消息</RouterLink></li>
            </ul>

            <div class="line"></div>

            <div class="shopping_cart"><shopping_cart/></div> 
            <div class="user"><user/></div> 

            
        </nav>


        <div class="hamburger_box" >
            <input type="checkbox" class="hamburger_check"  @change="checked_change" v-model="checked">
            <div class="hamburger">
                <div>
                    
                </div>
            </div>
        </div>


    </header>

    <div class="rwd_menu" ref="rwd_menu">
            <div class="rwd_menu_bg" ref="rwd_menu_bg"></div>
            <header class="rwd_header">
                <icon_purple/>
                <div class="hamburger_box" >
                <input type="checkbox" class="hamburger_check"  @change="checked_change" v-model="checked">
                    <div class="hamburger rwd_hamburger">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </header>
            <div class="rwd_menu_content">
                <div class="tittle_box">
            
                <RouterLink to="/">景點介紹</RouterLink>
                <RouterLink to="/">積分任務</RouterLink>
                <RouterLink to="/">商城</RouterLink>
                <RouterLink to="/">最新消息</RouterLink>
                </div>
                <div class="icon_box">
                    <shopping_cart/>
                    <user/>               
                </div>
            </div>
            <div class="bg_image">
                <div class="blue_man"><img src="../assets/images/blue_man.png" alt=""></div>
                <div class="yellow_man"><img src="../assets/images/yellow_man.png" alt=""></div>
            </div>
    </div>

</template>

<style>
.rwd_menu{

    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    visibility: hidden;
    transition: all .4s ease;
    /* transform-origin: right top; */
    transform: scale(0);
    z-index: 100;
}
.rwd_menu_bg{
    /* margin-top: 72px; */
    background-color: #e0c4ee;
    position: absolute;
    width: 100%;
    /* height: calc(100vh - 72px); */
    height:100vh;
    /* transform-origin: right top; */
    transform: scale(0);
    transition: all .4s ease;
    /* border-radius: 10%; */
}

.rwd_menu_content{
    width: 100%;
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 112px;
    padding: 0 15px;
    z-index: 2;
}

.tittle_box{
    height: 336px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--Primary-Primary-950, #460961);
    text-align: left;
    font-feature-settings: 'liga' off, 'clig' off;

    /* [Mobile]/H2 Regular(m) */
    font-family: "Dela Gothic One";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px; 
}

.icon_box{
    display: flex;
    padding: 5px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    border-radius: 20px;
    background: var(--primary-primary-400, #8C25C0);

}
.bg_image{
    position: relative;
    width: 100%;
    height: 100%;

}
.blue_man{
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
}
.yellow_man {
    display: block;
    position: absolute;
    right: 150px;
    bottom: 5px;
    z-index: 1;
}

.blue_man>img{
    display: block;
    width: 100%;

}
.yellow_man>img{
    display: block;
    width: 100%;

}
.rwd_header{
    background-color: transparent;
}
.rwd_hamburger >div{
    background-color: #8C25C0;
}
.rwd_hamburger >div::after{
    background-color: #8C25C0;
}
</style>








