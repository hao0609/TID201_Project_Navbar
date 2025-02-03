<script setup>
  import Swal from 'sweetalert2';
  import alert_web_L_row from './alert_web_L_row.vue'
  import { h } from "vue";   // h 是 Vue 組件創建虛擬節點方法
  import { renderToString } from "@vue/server-renderer"; // renderToString 是 Vue 組件 DOM 轉成字串方法


  // 自定義列的內容
  const rowData1 = {
  Title: "Title2 (Optional)",
  Text: "This is a dynamic message passed from the parent component.",
  ImgSrc: "../assets/images/blue_man.png"
};

const rowData2 = {
  Title: "Title2 (Optional)",
  Text: "This is a dynamic message passed from the parent component.This is a dynamic message passed from the parent component.This is a dynamic message passed from the parent component.This is a dynamic message passed from the parent component.",
};

  const showAlert = async () => {

      // 引用範例
      const row_content_1 = await renderToString(h(alert_web_L_row,{rowInfo: rowData1}));
      const row_content_2 = await renderToString(h(alert_web_L_row,{rowInfo: rowData2}));
      
      Swal.fire({
        title: `<h2>Tittle 1<h2>`,
        html: `<div class="content">
                  ${row_content_1}
                  ${row_content_2}
              </div>`,

        showCancelButton: true,
        confirmButtonText: `按鈕文字`,
        cancelButtonText: `關閉`,
        allowOutsideClick: true,     
        customClass: {
        popup: 'my-swal-L',
        confirmButton: 'btn_filled',
        cancelButton: 'btn_outline',
      }
      });
    }

    defineExpose({                                                // 暴露 showAlert 方法給父組件使用
      showAlert,
    });
</script>




