<script setup>
import { inject } from 'vue'                     // 透過 inject 取得 $swal 全局方法 

      // 自定義修改內容
      const props = defineProps({
        alertInfo: {
          type: Object,
          required: true,
          // 彈窗內容資料
          default: () => ({
            fristTitle: '',
            svg_icon: ``, //無法確認 ICON 是否可以用外部引入.vue檔方式，目前先使用字串方式
            SecondTittle: '',
            ThirdTittle: '',
            ButtonText: '',
            allowOutsideClick: null,
          }),
        },
      });

    const $swal = inject('$swal')

    const showAlert = () => {
      $swal.fire({
        title: `<h2>${props.alertInfo.fristTitle}<h2>`,
        html: `<div class="content">
                  <div class="alert_icon">
                      ${props.alertInfo.svg_icon}
                  </div>
                  <div class="title1 bold">
                       ${props.alertInfo.SecondTittle}
                  </div>
                  <div class="title2 bold">
                      ${props.alertInfo.ThirdTittle}
                  </div>
                  
              </div>`,
        confirmButtonText: `${props.alertInfo.ButtonText}`,
        allowOutsideClick: props.alertInfo.allowOutsideClick,     //強迫用戶無法點選空白處關閉視窗，只能進行登入
        customClass: {
        popup: 'my-swal',
        confirmButton: 'btn_filled'
      }
      });
    }
</script>

<template>
  <div>
    <button @click="showAlert" class="showAlert"><slot></slot></button>   
  </div>
</template>


<style>

.showAlert{

    font-family: 'Noto Sans TC', sans-serif;
    font-size: 30px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5%;
    margin: 10px;

}


</style>




