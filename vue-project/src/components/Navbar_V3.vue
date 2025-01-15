
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
        <icon_white/>
        <nav>
            <ul class="menu body bold txt-neutral-0">
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

    <div class="rwd_menu_V3" ref="rwd_menu">
            <div class="rwd_menu_bg_V3" ref="rwd_menu_bg"></div>
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
            
                <RouterLink to="/"><h2>景點介紹</h2></RouterLink>
                <RouterLink to="/"><h2>積分任務</h2></RouterLink>
                <RouterLink to="/"><h2>商城</h2></RouterLink>
                <RouterLink to="/"><h2>最新消息</h2></RouterLink>
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










