<script setup>
    import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
    import ground from '../assets/images/MessionGeneral/ground.vue';
    import road from '../assets/images/MessionGeneral/road.vue';
    import bridge from '../assets/images/MessionGeneral/bridge.vue';
    import building_tree from '../assets/images/MessionGeneral/building_tree.vue';
    import station from '../assets/images/MessionGeneral/station.vue';
    import Navbar_V1 from '../components/Navbar_V1.vue';
    import logo from '../assets/images/MessionGeneral/logo.vue';

    const BASE_W = 1440;
    const BASE_H = 1024;

    const mover = ref(null);
    const stageW = ref(window.innerWidth);
    const stageH = ref(window.innerHeight);
    const moverW = ref(0);
    const moverH = ref(0);
    const eScale = ref(1);
    const dragX = ref(0);
    const dragY = ref(0);
    const moving = ref(false);
    const scaling = ref(false);
    const velocityX = ref(0);
    const velocityY = ref(0);
    const friction = 0.95;
    let px = 0, py = 0, dx = 0, dy = 0, frameID = null;

    const updateSize = () => {
      stageW.value = window.innerWidth;
      stageH.value = window.innerHeight;

      moverW.value = stageW.value * 1.1;
      moverH.value = moverW.value * (BASE_H / BASE_W);

      if (moverH.value < stageH.value) {
        moverH.value = stageH.value * 1.1;
        moverW.value = moverH.value / (BASE_H / BASE_W);
      }

       // 確保拖曳位置仍在可視範圍內
       dragX.value = Math.min(0, Math.max(dragX.value, stageW.value - moverW.value));
       dragY.value = Math.min(0, Math.max(dragY.value, stageH.value - moverH.value));
    };

    const startDrag = (event) => {
      console.log("Drag started"); // Debugging
      mover.value.classList.add("active"); // 開始拖曳
      moving.value = true;
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      px = clientX;
      py = clientY;
      dx = 0;
      dy = 0;
      velocityX.value = 0;
      velocityY.value = 0;
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchmove", onDrag, { passive: false });
      document.addEventListener("touchend", stopDrag);
    };

    const onDrag = (event) => {
      if (!moving.value) return;
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      dx = clientX - px;
      dy = clientY - py;
      px = clientX;
      py = clientY;
      dragX.value = Math.min(0, Math.max(dragX.value + dx, stageW.value - moverW.value));
      dragY.value = Math.min(0, Math.max(dragY.value + dy, stageH.value - moverH.value));

      console.log(dragX.value, dragY.value);
      console.log(stageW.value-moverW.value,stageH.value-moverH.value);
    //   console.log(moverW.value,moverH.value);
      

      // console.log(`Dragging: X=${dragX.value}, Y=${dragY.value}`); // Debugging
    };

    const stopDrag = () => {
      console.log("Drag stopped"); // Debugging
      moving.value = false;
      mover.value.classList.remove("active"); // 停止拖曳

      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", stopDrag);

      frameID = requestAnimationFrame(inertiaMove);
    };

    const inertiaMove = () => {
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return;
      dx *= friction;
      dy *= friction;
      dragX.value = Math.min(0, Math.max(dragX.value + dx, stageW.value - moverW.value));
      dragY.value = Math.min(0, Math.max(dragY.value + dy, stageH.value - moverH.value));
      frameID = requestAnimationFrame(inertiaMove);
    };

    const moverStyle = computed(() => ({
      width: `${moverW.value}px`,
      height: `${moverH.value}px`,
      transform: `translate3d(${dragX.value}px, ${dragY.value}px, 0) scale(${eScale.value})`,
      transition: moving.value ? "none" : "transform 0.1s ease-out"
    }));

    onMounted(async () => {
      console.log("mover:", mover.value);
      window.addEventListener("resize", updateSize);
      updateSize();

      await nextTick();
      if (mover.value) {
        mover.value.addEventListener("mousedown", startDrag);
        mover.value.addEventListener("touchstart", startDrag, { passive: false });
      }
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateSize);
      if (mover.value) {
        mover.value.removeEventListener("mousedown", startDrag);
        mover.value.removeEventListener("touchstart", startDrag);
      }
      cancelAnimationFrame(frameID);
    });

</script>


<template>
    <Navbar_V1/>
    <div class="body">
        <div id="wrapper">
            <div id="container">
                <div id="stage">
                    <div ref="mover" class="mover" :style="moverStyle" @mousedown="startDrag" @touchstart.prevent="startDrag">
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
        will-change: transform;
    }
    #stage .mover.active {
        cursor: move;
        pointer-events: auto;
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
    #stage .mover {
    position: relative;
    transform-origin: 0 0;
    pointer-events: auto; /* 允許滑鼠事件 */
    will-change: transform;
    cursor: grab;
    }

    #stage .mover.active {
    cursor: grabbing;
    pointer-events: auto; /* 啟用滑鼠拖動 */
    }

</style>



