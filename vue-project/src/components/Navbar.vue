
<script setup>
import icon from './icons/icon.vue' 
import shopping_cart from './icons/shopping_cart.vue' 
import user from './icons/user.vue' 
import hamburger from './icons/hamburger.vue'
import yellow_man from './icons/yellow_man.vue'
import blue_man from './icons/blue_man.vue'

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

    <div class="rwd_menu">
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

            <yellow_man/>
            <blue_man/>
        
        
        
        </div>

    
    
    </div>




</template>


<style>
.rwd_menu{
    background-color: #E0C4EE;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
}
.rwd_menu_content{
    width: 100%;
    display: flex;
    height: 336px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 112px 40px 0px 40px;
}

.tittle_box{
    height: 100%;
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

</style>








