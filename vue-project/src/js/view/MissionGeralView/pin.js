import { inject , computed } from 'vue';

/**
 * @param {Ref<number>} moverW - move.js 回傳的 mover 寬度
 * @param {Ref<number>} moverH - move.js 回傳的 mover 高度
 */

export function pinjs(moverW, moverH) {
    // console.log(moverW.value,moverH.value);
    
    
    const pinStyle = computed(() => {
        // 當 moverW 或 moverH 尚未更新時，先回傳空物件避免錯誤
        if (!moverW.value || !moverH.value) return {};
        console.log(moverW.value, moverH.value);

        const leftRatio = 1045 / 2112;

        console.log(leftRatio);
        
        const topRatio = 150 / 1501.86;

        console.log(topRatio);
        

        return {
            left: `${moverW.value * leftRatio}px`,
            top: `${moverH.value * topRatio}px`
        };
      });


  return { pinStyle };

  

}
