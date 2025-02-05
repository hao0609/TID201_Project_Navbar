<script setup>
  import Swal from 'sweetalert2';

  import sampleImg from '@/assets/images/sample.jpg';  // 引用圖片範例

  //自定義列的內容
  const alertInfo = {
  showCloseButton: true,
  Title_H2: "H2",           //若不要顯示 H2 標題,則設為空字串
  ImgSrc: sampleImg,
  showTextBox:false,
  Title1: "Title1 (optional)",
  Title2: "Title2Title2Title2Title2Title2Title2Title2Title2",
  Button1_Text: "關閉",
  Button2_Text: "按鈕文字",
  pictureMode: false,

};


  const showAlert = async () => {


    
      Swal.fire({
        title: `<h2>${alertInfo.Title_H2}<h2>`,
        html: `<div class="content">
                <div class="image"><img src="${alertInfo.ImgSrc}"></div>
                <div class="text_box" id="alert_mobile_textBox">
                    <div class="title1 bold">${alertInfo.Title1}</div>
                    <div class="title2 bold">${alertInfo.Title2}</div>
                </div>
              </div>`,

        showCancelButton: true,
        showCloseButton: alertInfo.showCloseButton,
        confirmButtonText: `${alertInfo.Button2_Text}`,
        cancelButtonText: `${alertInfo.Button1_Text}`,
        allowOutsideClick: true,     
        customClass: {
        popup: 'my-swal-mobile',
        confirmButton: 'btn_filled',
        cancelButton: 'btn_outline',
      },

      // 修改自定義 X 彈窗關閉按鈕
      didOpen: () => {
        document.querySelector(".swal2-close").innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M6.10576 34.3858C4.19556 32.5408 2.67192 30.3339 1.62374 27.8939C0.575556 25.4538 0.0238315 22.8294 0.000755135 20.1738C-0.0223212 17.5182 0.483713 14.8846 1.48933 12.4267C2.49495 9.96876 3.98001 7.73572 5.85786 5.85786C7.73572 3.98001 9.96876 2.49495 12.4267 1.48933C14.8846 0.483713 17.5182 -0.0223212 20.1738 0.000755135C22.8294 0.0238315 25.4538 0.575556 27.8939 1.62374C30.3339 2.67192 32.5408 4.19556 34.3858 6.10576C38.0289 9.87781 40.0448 14.9299 39.9992 20.1738C39.9537 25.4177 37.8503 30.434 34.1421 34.1421C30.434 37.8503 25.4177 39.9537 20.1738 39.9992C14.9299 40.0448 9.87781 38.0289 6.10576 34.3858ZM23.0458 20.2458L28.7058 14.5858L25.8858 11.7658L20.2458 17.4258L14.5858 11.7658L11.7658 14.5858L17.4258 20.2458L11.7658 25.9058L14.5858 28.7258L20.2458 23.0658L25.9058 28.7258L28.7258 25.9058L23.0658 20.2458H23.0458Z" fill="#8C25C0"/>
          </svg>
        `;
      }
      });

      // 隱藏下方文字區域

      if (alertInfo.showTextBox == false) {
         document.querySelector('#alert_mobile_textBox').style.display = 'none';
      }

    }

    defineExpose({                                                // 暴露 showAlert 方法給父組件使用
      showAlert,
    });
</script>




