<template>
<!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M5.33325 9.33333C5.33325 8.59695 5.93021 8 6.66659 8H25.3333C26.0696 8 26.6666 8.59695 26.6666 9.33333C26.6666 10.0697 26.0696 10.6667 25.3333 10.6667H6.66659C5.93021 10.6667 5.33325 10.0697 5.33325 9.33333ZM5.33325 16C5.33325 15.2636 5.93021 14.6667 6.66659 14.6667H25.3333C26.0696 14.6667 26.6666 15.2636 26.6666 16C26.6666 16.7364 26.0696 17.3333 25.3333 17.3333H6.66659C5.93021 17.3333 5.33325 16.7364 5.33325 16ZM5.33325 22.6667C5.33325 21.9303 5.93021 21.3333 6.66659 21.3333H25.3333C26.0696 21.3333 26.6666 21.9303 26.6666 22.6667C26.6666 23.403 26.0696 24 25.3333 24H6.66659C5.93021 24 5.33325 23.403 5.33325 22.6667Z" fill="white"/>
</svg> -->

<div class="hamburger">
    <div>
        
    </div>

</div>

</template>


<style>
.hamburger{
    width: 22px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hamburger > div{

    height: 3px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    position: relative

}


.hamburger > div:before, .hamburger > div:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: white;
    transition: all 0.4s ease;
}


</style>
