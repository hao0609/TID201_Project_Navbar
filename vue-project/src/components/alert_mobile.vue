<script setup>
  import Swal from 'sweetalert2';

//   import sampleImg from '@/assets/images/sample.jpg';  // 引用圖片範例

  // 自定義列的內容
//   const rowData1 = {
//   Title: "Title2 (Optional)",
//   Text: "This is a dynamic message passed from the parent component.",
//   ImgSrc: blueManImg
// };


  const showAlert = async () => {

    //   // 引用範例
    //   const row_content_1 = await renderToString(h(alert_web_L_row,{rowInfo: rowData1}));
    //   const row_content_2 = await renderToString(h(alert_web_L_row,{rowInfo: rowData2}));
    
      Swal.fire({
        title: `<h2>Tittle 1<h2>`,
        html: `<div class="content">
                <div class="image"></div>
                <div class="text_box">
                    <div class="title2 bold">Title1(optional)</div>
                    <div class="body">Title2Title2Title2Title2Title2Title2Title2Title2</div>
                </div>
              </div>`,

        showCancelButton: true,
        confirmButtonText: `按鈕文字`,
        cancelButtonText: `關閉`,
        allowOutsideClick: true,     
        customClass: {
        popup: 'my-swal-mobile',
        confirmButton: 'btn_filled',
        cancelButton: 'btn_outline',
      }
      });
    }

    defineExpose({                                                // 暴露 showAlert 方法給父組件使用
      showAlert,
    });
</script>




