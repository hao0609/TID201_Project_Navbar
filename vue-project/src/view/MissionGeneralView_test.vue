<template>
    <!-- <div class="body">
        <div class="wrapper">
            <div class="container">
                <div class="mainstage">
                    <div class="stage">
                        <div class="background">
                            <img src="../assets/images/background.png" alt="">
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div> -->


    <div>
        <img src="../assets/images/background.png" alt="">
    </div>
</template>


<style>
.body{
    height: 100vh;
    overflow: hidden;
}

.body, .container{
    width: 100%;
}
.wrapper{
    height: 100%;
}
.stage{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 0;
    z-index: 0;
    overflow: hidden;

}

.background{
    background-color: blue;
}

.background > img{
    width: 1920px;
    height: 1080px;
    object-fit: cover; /* 確保圖片填滿且不變形 */
}




</style>
