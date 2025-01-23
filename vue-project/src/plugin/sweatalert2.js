import Swal from 'sweetalert2';               // 從 node_moudle 引入 SweetAlert

export default {
  install(app) {                              // install (app) 為 Vue 插件安裝方法
    app.provide('$swal', Swal);               // 透過 provide 提供定義 $swal變數 為全域方法
  }
};


//其實應該可以不用這樣寫