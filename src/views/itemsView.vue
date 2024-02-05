<template>
    <div class="container">
        <div><navbar/></div>
        <div class="bg">
            <img src="../assets/image_items_bg.png" alt="background" style="max-width: 100%;">

        </div>
        <div><Footer/></div>

    </div>


    </template>


<script>

import navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


export default {
    components: {
        navbar,
        Footer,


    }
}
</script>
<style scoped>
*{
        --primary-color:rgba(204, 51, 51, 1);
    --second-color:rgba(42, 67, 93, 1);
    --third-color:rgba(255, 248, 238, 1);
    --fourth-color:rgba(75, 255, 60, 1);
    --fifth-color:rgba(255, 255, 255, 1);
}
.container{
    text-align: center;   
    background-color: var(--third-color);
}
.container .bg{
    position: relative;
}
.container .bg::after{

    content: 'ITEMS';
    color: var(--fifth-color);
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    left: 46%;
    top: 33%;

}
.container .bg::before{

    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.';
    color: var(--fifth-color);
    font-size: 15px;
    text-align: center;
    position: absolute;
    left: 25%;
    top: 50%;
}

</style>