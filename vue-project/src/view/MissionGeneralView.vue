<template>
  <div class="viewer" ref="viewer">
    <div class="map" ref="map":style="mapStyle" @mousedown="startDrag"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import background from "../assets/images/background.png";
const viewer = ref(null);
const map = ref(null);

// 地圖偏移量 & 縮放
const offsetX = ref(0);
const offsetY = ref(0);


// 記錄 viewer 和 map 的尺寸
const viewerWidth = ref(0);
const viewerHeight = ref(0);
const mapWidth = ref(0);
const mapHeight = ref(0);

let startX = 0, startY = 0;
let isDragging = false;

// 計算地圖樣式
const mapStyle = computed(() => ({
  width:  `${mapWidth.value}px`,
  height: `${mapHeight.value}px`,
  transform: `translate(${offsetX.value}px, ${offsetY.value}px)`,
  cursor: isDragging ? "grabbing" : "grab",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
}));

//計算合法範圍 (X, Y 不可超出 viewer)
const clampPosition = () => {
  const minX = viewerWidth.value - mapWidth.value;
  const minY = viewerHeight.value - mapHeight.value;
  //console.log(viewerWidth.value);
  //console.log(mapWidth.value);
  
  console.log(minX,minY);
  

  offsetX.value = Math.max(minX, Math.min(0, offsetX.value));
  offsetY.value = Math.max(minY, Math.min(0, offsetY.value));
};

// 拖曳事件
const startDrag = (e) => {
  isDragging = true;
  startX = e.clientX - offsetX.value;
  startY = e.clientY - offsetY.value;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (e) => {
  if (!isDragging) return;
  offsetX.value = e.clientX - startX;
  offsetY.value = e.clientY - startY;
  clampPosition(); // 限制範圍
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

// 初始化
onMounted(() => {
  viewerWidth.value = viewer.value.clientWidth;
  viewerHeight.value = viewer.value.clientHeight;
  mapWidth.value = viewerWidth.value*1.05;
  mapHeight.value = viewerHeight.value*1;

  console.log(mapWidth.value,mapHeight.value);
  
});
</script>

<style scoped>
.viewer {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  position: relative;
  overflow: hidden;
}

.map {
  /* width: 1920px;
  height: 1080px; */
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}
</style>
