<script setup>
    import { ref } from 'vue'
    import ground from '../assets/images/MessionGeneral/ground.vue';
    import road from '../assets/images/MessionGeneral/road.vue';
    import bridge from '../assets/images/MessionGeneral/bridge.vue';
    import building_tree from '../assets/images/MessionGeneral/building_tree.vue';
    import station from '../assets/images/MessionGeneral/station.vue';
    import Navbar_V1 from '../components/Navbar_V1.vue';
    import logo from '../assets/images/MessionGeneral/logo.vue';
    import pin from '../assets/images/MessionGeneral/pin.vue';
    import { movejs } from '../js/view/MissionGeralView/move';          // 引入 move.js
    const { mover, moverStyle, active,moverH, moverW } = movejs();      // 使用 move.js 的 move()
    
    import { pinjs } from '../js/view/MissionGeralView/pin'             // 引入 pin.js
    const { pinStyle } = pinjs();                             // 使用 pin.js 的 pin()

    import alert_user_location from '@/alert/alert_user_location.vue';
    const alert_web_M_userlocation = ref(null);

    const UserLocationShowAlert = () => {
    alert_web_M_userlocation.value.UserLocationShowAlert();  
    }

    const game_menu_btns_show = ref(false);   // 遊戲選單按鈕是否隱藏




</script>


<template>
    <Navbar_V1/>
    <div class="game_menu">
        <div class="menu_box">
            <button class="menu_btn" @click="game_menu_btns_show = !game_menu_btns_show">
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M1.68164 1H19.3188M1.68164 7.26582H19.3188M1.68164 13.5316H19.3188" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div class="text caption bold">選單</div>
            </button>
            
            <div class="money_box">
                <div class="icon">
                    <svg class="vector" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 2.64381C26.4323 4.0481 28.4521 6.06791 29.8564 8.50022C31.2607 10.9325 32 13.6916 32 16.5002C32 19.3088 31.2607 22.0679 29.8563 24.5002C28.452 26.9325 26.4322 28.9523 23.9998 30.3565C21.5675 31.7608 18.8084 32.5 15.9997 32.5C13.1911 32.5 10.432 31.7606 7.99974 30.3563C5.56744 28.9519 3.54766 26.9321 2.14342 24.4997C0.739168 22.0674 -7.13435e-05 19.3083 5.16424e-09 16.4997L0.00800019 15.9813C0.0976051 13.2181 0.901676 10.5253 2.34182 8.16536C3.78197 5.80543 5.80905 3.85893 8.22543 2.51563C10.6418 1.17232 13.365 0.478063 16.1296 0.500528C18.8942 0.522994 21.6058 1.26142 24 2.64381ZM16 6.89978C15.5757 6.89978 15.1687 7.06835 14.8686 7.36841C14.5686 7.66846 14.4 8.07543 14.4 8.49977C13.127 8.49977 11.9061 9.00548 11.0059 9.90565C10.1057 10.8058 9.6 12.0267 9.6 13.2997C9.6 14.5728 10.1057 15.7937 11.0059 16.6938C11.9061 17.594 13.127 18.0997 14.4 18.0997V21.2997C14.1346 21.3144 13.8697 21.264 13.6283 21.1531C13.3868 21.0421 13.1761 20.8738 13.0144 20.6629L12.9056 20.5013C12.6867 20.1482 12.3391 19.8942 11.9362 19.7928C11.5334 19.6915 11.1069 19.7507 10.747 19.9581C10.3871 20.1655 10.1219 20.5048 10.0076 20.9041C9.89326 21.3035 9.93874 21.7316 10.1344 22.0981C10.5428 22.8063 11.1253 23.3985 11.8267 23.8185C12.5282 24.2386 13.3252 24.4725 14.1424 24.4981H14.4C14.3997 24.8902 14.5434 25.2688 14.8038 25.562C15.0643 25.8552 15.4233 26.0426 15.8128 26.0884L16 26.0996C16.4243 26.0996 16.8313 25.9311 17.1314 25.631C17.4314 25.331 17.6 24.924 17.6 24.4997L17.8816 24.4917C19.129 24.4196 20.2991 23.8639 21.1433 22.9428C21.9875 22.0217 22.4392 20.8077 22.4026 19.5588C22.3659 18.3099 21.8437 17.1245 20.9469 16.2545C20.0501 15.3846 18.8494 14.8985 17.6 14.8997V11.6997C18.1728 11.6805 18.6736 11.9237 18.9856 12.3365L19.0944 12.4981C19.3133 12.8512 19.6609 13.1052 20.0638 13.2066C20.4666 13.308 20.8931 13.2487 21.253 13.0413C21.6129 12.8339 21.8781 12.4947 21.9924 12.0953C22.1067 11.6959 22.0613 11.2678 21.8656 10.9014C21.4574 10.1928 20.875 9.60027 20.1735 9.17997C19.4721 8.75967 18.6749 8.52553 17.8576 8.49977H17.6C17.6 8.07543 17.4314 7.66846 17.1314 7.36841C16.8313 7.06835 16.4243 6.89978 16 6.89978ZM17.6 18.0997C18.0243 18.0997 18.4313 18.2683 18.7314 18.5683C19.0314 18.8684 19.2 19.2753 19.2 19.6997C19.2 20.124 19.0314 20.531 18.7314 20.831C18.4313 21.1311 18.0243 21.2997 17.6 21.2997V18.0997ZM14.4 11.6997V14.8997C13.9757 14.8997 13.5687 14.7312 13.2686 14.4311C12.9686 14.131 12.8 13.7241 12.8 13.2997C12.8 12.8754 12.9686 12.4684 13.2686 12.1684C13.5687 11.8683 13.9757 11.6997 14.4 11.6997Z" fill="#FCD34D" />
                    </svg
                ></div>
                <div class="money title1 bold">1,000,000</div>   
            </div>
        </div>
    </div>
    <div class="game_menu_btns" v-show="game_menu_btns_show">
        <div class="game_menu_btnsBox">
            <button id="receive_btn" class="btn_box">
                <svg class="vector" width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.04 29.6025C2.04 30.256 2.64775 30.7839 3.4 30.7839H15.555V16.903H2.04V29.6025ZM18.445 30.7839H30.6C31.3522 30.7839 31.96 30.256 31.96 29.6025V16.903H18.445V30.7839ZM32.64 8.04279H26.367C26.945 7.25276 27.285 6.31506 27.285 5.3109C27.285 2.50149 24.6542 0.216309 21.42 0.216309C19.6605 0.216309 18.0753 0.895588 17 1.96619C15.9248 0.895588 14.3395 0.216309 12.58 0.216309C9.34575 0.216309 6.715 2.50149 6.715 5.3109C6.715 6.31506 7.05075 7.25276 7.633 8.04279H1.36C0.60775 8.04279 0 8.57071 0 9.22414V14.3926H15.555V8.04279H18.445V14.3926H34V9.22414C34 8.57071 33.3923 8.04279 32.64 8.04279ZM15.555 7.89512H12.58C10.9395 7.89512 9.605 6.73591 9.605 5.3109C9.605 3.88589 10.9395 2.72669 12.58 2.72669C14.2205 2.72669 15.555 3.88589 15.555 5.3109V7.89512ZM21.42 7.89512H18.445V5.3109C18.445 3.88589 19.7795 2.72669 21.42 2.72669C23.0605 2.72669 24.395 3.88589 24.395 5.3109C24.395 6.73591 23.0605 7.89512 21.42 7.89512Z" fill="#FF3B30" />
                </svg>
                <div class="btn_box_text">獎勵領取</div>
                <div id="receive_notify" class="notify"></div>
            </button>
            <button id="stamp_btn" class="btn_box">
                <svg class="vector" width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3963 0.500141C9.30776 0.50058 9.21945 0.503035 9.12941 0.505665C6.69636 0.576334 3.71418 1.44418 0 3.46201V24.8007C4.35988 22.2738 7.65636 21.5507 10.3469 21.8992C12.7505 22.2105 14.6289 23.36 16.342 24.6337V3.33041C14.6763 1.77464 12.7408 0.696541 10.1741 0.524691C9.91509 0.507217 9.65567 0.499031 9.39622 0.500141H9.3963ZM24.6037 0.500141C24.3383 0.498738 24.0784 0.507857 23.8257 0.524691C21.2592 0.696541 19.3238 1.77464 17.658 3.33041V24.6337C19.371 23.36 21.2495 22.2105 23.6531 21.8992C26.3436 21.5507 29.6401 22.2737 34 24.8008V3.4621C30.2858 1.44426 27.3036 0.576421 24.8706 0.505577C24.7806 0.503122 24.6922 0.500667 24.6037 0.500316V0.500141ZM25.0141 23.4527C24.9396 23.4525 24.8653 23.4541 24.792 23.4555C24.4471 23.4621 24.1155 23.488 23.7944 23.5295C21.36 23.8448 19.5183 25.1056 17.6582 26.5491V26.5737C17.188 26.3992 16.7241 26.3659 16.2658 26.4886C14.4316 25.0702 12.6066 23.8405 10.2057 23.5295C9.8043 23.4776 9.38496 23.452 8.9456 23.4556C6.64693 23.4743 3.79202 24.313 7.17045e-05 26.6065V30.3355C4.35995 27.8084 7.65615 27.0855 10.3468 27.4341C11.6773 27.6063 12.8462 28.0342 13.9161 28.5984C13.5802 29.1301 13.2483 29.7617 12.9206 30.5H21.3259C20.9004 29.7793 20.4794 29.1485 20.0613 28.6096C21.1372 28.0395 22.3134 27.6075 23.653 27.4341C26.3436 27.0856 29.6398 27.8084 33.9999 30.3357V26.6067C30.186 24.2999 27.3194 23.4623 25.0139 23.4529L25.0141 23.4527Z" fill="#A2845E" />
                </svg>
                <div class="btn_box_text">集章冊</div>
                <div id="stamp_notify" class="notify"></div>
            </button>
            <button id="question_btn" class="btn_box">
                <svg class="vector" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30.5C6.7155 30.5 0 23.7845 0 15.5C0 7.2155 6.7155 0.5 15 0.5C23.2845 0.5 30 7.2155 30 15.5C30 23.7845 23.2845 30.5 15 30.5ZM13.5 20V23H16.5V20H13.5ZM16.5 17.5325C17.7055 17.1692 18.7404 16.3849 19.4162 15.3226C20.0921 14.2603 20.3638 12.9906 20.1821 11.7447C20.0004 10.4988 19.3772 9.35966 18.426 8.53469C17.4749 7.70971 16.2591 7.25381 15 7.25C13.7862 7.24962 12.6098 7.66984 11.6709 8.43915C10.732 9.20846 10.0888 10.2793 9.8505 11.4695L12.7935 12.059C12.877 11.6411 13.0775 11.2556 13.3716 10.9472C13.6656 10.6388 14.0412 10.4203 14.4546 10.3171C14.8681 10.2138 15.3023 10.2301 15.7068 10.364C16.1114 10.4978 16.4696 10.7439 16.7397 11.0734C17.0099 11.4029 17.181 11.8023 17.233 12.2253C17.2851 12.6482 17.2159 13.0772 17.0337 13.4624C16.8514 13.8475 16.5635 14.173 16.2035 14.401C15.8435 14.6289 15.4261 14.75 15 14.75C14.6022 14.75 14.2206 14.908 13.9393 15.1893C13.658 15.4706 13.5 15.8522 13.5 16.25V18.5H16.5V17.5325Z" fill="black" />
                </svg>
                <div class="btn_box_text">玩法說明</div>
            </button>
        </div>
    </div>
    <div class="body">
        <div id="wrapper">
            <div id="container">
                <div id="stage">
                    <div ref="mover" class="mover active" :style="moverStyle" @mousedown="startDrag" @touchstart.prevent="startDrag">
                        <div class="wrapper">
                            <div class="item">
                                <ground class="ground"/>
                            </div>
                            <div class="item">
                                <road class="road"/>
                            </div>
                            <div class="item">
                                <bridge class="bridge"/>
                            </div>
                            <div class="item">
                                <station class="station"/>
                            </div>
                            <div class="item">
                                <building_tree class="building_tree"/>
                            </div>
                            <div class="item">
                                <logo class="logo"/>
                            </div>
                        </div>
                        <div class="hitarea">
                          <button ref="pin_obj" class="pin" :style="pinStyle" @click="UserLocationShowAlert" @touchstart="UserLocationShowAlert" ><pin/></button>
                          <!-- <pin/> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <alert_user_location ref="alert_web_M_userlocation"/>   
</template>


<style lang="scss"> 
    @import "@/assets/sass/base/_color.scss";
    @import "@/assets/sass/base/_font.scss";

    button {
        cursor: pointer;
    }

    .game_menu{
        position: absolute;
        top: 72px;
        width: 100%;
        height: 70px;
        z-index: 99;
        padding: 0 40px;
        display: flex;
        @include mobile() {
            background-color: $neutral-0;
        }
    }
    .game_menu > .menu_box{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: flex-start;
        flex-shrink: 0;
        position: relative;
        @include mobile() {
           width: 100%;
           justify-content: space-between;
        }
    }
    .game_menu > .menu_box > .menu_btn{
        background-color:$neutral-700;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 55px;
        height: 55px;
        position: relative;
        border: 0;
    }
    .game_menu > .menu_box > .menu_btn > .text{
        line-height: 100% ;
        color: $neutral-0
    }

    .game_menu > .menu_box > .money_box{
        background:  $neutral-0;
        border-radius: 12px;
        padding: 10px 25px 10px 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        gap: 10px;
        @include mobile() {
            padding: 0;
        }
    }

    .game_menu > .menu_box > .money_box > .money{
        color: $neutral-700;
    }

    .game_menu_btns{
        position: absolute;
        top: 145px;
        width: 100%;
        z-index: 99;
        padding: 0 40px;
        display: flex;
    }

    .game_menu_btns > .game_menu_btnsBox{
        background: #dddddd;
        border-radius: 20px;
        padding: 27px 14px;
        display: flex;
        flex-direction: row;
        gap: 14px;
        align-items: center;
        justify-content: center;
        z-index: 99; 

        @include mobile() {
           width: 100%;
        }

    }


  
    .game_menu_btns > .game_menu_btnsBox > .btn_box{
        background: #ffffff;
        border-radius: 29px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 85px;
        height: 80px;
        border: 0;
        position: relative;
    }

    .game_menu_btns > .game_menu_btnsBox > .btn_box > .btn_box_text{
        font-family: $font-noto;
        font-size: 16px;
        line-height: 24px; 
        font-weight: 700px;
    }

    .game_menu_btns > .game_menu_btnsBox> .btn_box > .notify{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #ff0000;
        border-radius: 50%;
        width: 23px;
        height: 23px;
    }

    #container, .body {
        width: 100%;
    }

    .body{    
        height: 100vh;
        overflow: hidden;
        background-color: #FC79D0;
    }
    #wrapper {
        height: 100%;
    }
    #stage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        padding: 0 !important;
        z-index: 0;
        overflow: hidden;
    }
    
    #stage .mover {
      position: relative;
      transform-origin: 0 0;
      pointer-events: none;
      will-change: transform
    }

    #stage .mover.active {
        cursor: grab;
        pointer-events: auto
    }

    #stage .mover.active.dragging {
        cursor: grabbing;
    }



    #stage .mover .wrapper, #stage .mover .wrapper .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    #stage .mover .wrapper .item svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #stage .mover .hitarea .hit svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }


    #stage .mover .hitarea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: auto
    }

    #stage .mover .hitarea button{
      position: absolute;
      display: block;
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      outline: none;
      transition: none;
    }

    #stage .mover .hitarea .pin{
      position: absolute;
      width:71px;
      height:103px;
    }

    #stage .mover .hitarea .pin svg{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        transform-origin: 50% 85%
    }
    



</style>




