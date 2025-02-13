<script setup>

    import ground from '../assets/images/MessionGeneral/ground.vue';
    import road from '../assets/images/MessionGeneral/road.vue';
    import bridge from '../assets/images/MessionGeneral/bridge.vue';
    import building_tree from '../assets/images/MessionGeneral/building_tree.vue';
    import station from '../assets/images/MessionGeneral/station.vue';
    import Navbar_V1 from '../components/Navbar_V1.vue';
    import logo from '../assets/images/MessionGeneral/logo.vue';
    import pin from '../assets/images/MessionGeneral/pin.vue';
    import { movejs } from '../js/view/MissionGeralView/move';   // 引入 move.js
    const { mover, moverStyle, active,moverH, moverW } = movejs();              // 使用 move.js 的 move()
    
    import { pinjs } from '../js/view/MissionGeralView/pin'      // 引入 pin.js
    const { pinStyle } = pinjs(moverW, moverH);                               // 使用 pin.js 的 pin()

</script>


<template>
    <Navbar_V1/>
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
                          <button class="pin" :style="pinStyle" @click="clickPin"><pin/></button>
                          <!-- <pin/> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<style>
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
        -webkit-backface-visibility: hidden;
    }

    #stage .mover .hitarea .hit svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
    }


    #stage .mover.active .hitarea .hit .station path {
        cursor: pointer;
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
      cursor: pointer;
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




