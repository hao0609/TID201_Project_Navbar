
<script setup>
import icon from './icons/icon.vue' 
import shopping_cart from './icons/shopping_cart.vue' 
import user from './icons/user.vue' 
import hamburger from './icons/hamburger.vue'
</script>


<template>
    <header>
        <div class="icon">
            <icon/>
            <div class="icon_text">
                METRO
            </div>      
        </div>            
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

         <hamburger/>
        
    </header>




</template>








