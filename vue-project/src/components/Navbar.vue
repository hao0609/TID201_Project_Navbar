
<script setup>
import icon from './icons/icon.vue' 
import shopping_cart from './icons/shopping_cart.vue' 
import user from './icons/user.vue' 
import hamburgerIcon from './icons/hamburger_icon.vue'
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
        <div class="hamburger_box">
         <hamburgerIcon/>
        </div>
        
    </header>



</template>

<style>

 .icon_text{
    font-family: "Dela Gothic One";
    font-size: 24px;
    color: white;
 }
 .icon{
    display: flex;
    gap: 15px;
    align-items: center;
 }
 header{
    display: flex;
    width: 100%;
    background-color: black;
    height: 72px;
    /* position: absolute; */
    padding: 0px 40px;
    justify-content:space-between

 }
 ul{
    list-style: none;
    display: flex;
 }
 nav{
    display: flex;
    align-items: center;
 }
.menu{
    font-size: 16px;
    font-family: 'NotoSansTC';
    display: flex;
    padding: 0;
    gap: 32px;
    color: white;
 }
 .line{
    width: 1px;
    height: 21px;
    background: white;
    margin: 0 36px;
 }
 .shopping_cart{
    margin-right: 36px;
 }
 .hamburger_box{
    display: flex;
    align-items: center;
    display: none;
    cursor: pointer;
 }
 @media screen and (max-width: 800px) {
   
   nav{
      display: none;
   }
   .hamburger_box{
      display: flex;
   }

 }

 

</style>

