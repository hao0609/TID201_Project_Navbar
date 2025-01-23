<script setup>
  import Swal from 'sweetalert2';

      // 自定義修改內容
    //   const props = defineProps({
    //     alertInfo: {
    //       type: Object,
    //       required: true,
    //       // 彈窗內容資料
    //       default: () => ({
    //         fristTitle: 'Tittle 1',
    //         svg_icon: ``, //無法確認 ICON 是否可以用外部引入.vue檔方式，目前先使用字串方式
    //         SecondTittle: '',
    //         ThirdTittle: '',
    //         ButtonText: '',
    //         allowOutsideClick: null,
    //       }),
    //     },
    //   });

    const showAlert = () => {
      Swal.fire({
        title: `<h2>Tittle 1<h2>`,
        html: `<div class="content">
                <div class="row_box">
                    <div class="image"></div>
                    <div class="text_box">
                        <div class="title2 bold">Title2 (Optional)</div>
                        <div class="body">You can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting dataYou can chat freely after a privacy my chatroom by chatting data</div>
                    </div>
                </div>
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

<template>
    <div>
        <button @click="showAlert" class="showAlert">用戶登入提醒</button> 
    </div>
</template>


<style>
.image{
    width: 335px;
    height: 273px;
    border-radius: 12px;
    background:  #CCD1D5;
}
.row_box{
    display: flex;
    justify-content: space-around;
}
.my-swal-L{
    width: 1138px;
}
.text_box{
    width: 715px;
    text-align: left;
}
</style>






