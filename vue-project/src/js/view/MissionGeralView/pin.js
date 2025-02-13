import { inject , computed, h } from 'vue';

/**
 * @param {Ref<number>} moverW - move.js 回傳的 mover 寬度
 * @param {Ref<number>} moverH - move.js 回傳的 mover 高度
 */

// baseW = 1440;                // 基準寬度 (來自每個 SVG 檔的寬高)
// baseH = 1024;                // 基準高度

export function pinjs(moverW, moverH) {
    // console.log(moverW.value,moverH.value);
    
    
    const pinStyle = computed(() => {
        // 當 moverW 或 moverH 尚未更新時，先回傳空物件避免錯誤
        if (!moverW.value || !moverH.value) return {};
        console.log(moverW.value, moverH.value);
        
        // 淡水站畫面地位
        const leftRatio = 830 / 1689.60;
        const topRatio = 100 / 1201.49;
        const widthRatio = 71 / 1689.60;     
        const heightRatio = 103 / 1201.49;


        

        return {
            left: `${leftRatio * 100}%`,
            top: `${topRatio * 100}%`,
            width: `${widthRatio * 100}%`,
            height: `${heightRatio * 100}%`
        };
      });


      

      


  return { pinStyle };

  

}
