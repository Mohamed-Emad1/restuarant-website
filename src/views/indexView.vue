<template>
    <link rel="stylesheet" href="src/normalize/normalize.css">
    <link rel="stylesheet" href="src/normalize/colors.css">

    <div><navbar/></div>
    <div class="container">
    
        <!-- Food section start -->
        <div class="food">
            <p>Food items</p>
            <h2>popular Dishes</h2>
            <div class="food-images">
                <img src="../assets/image_Dishes_1.png" alt="dish1">
                <img src="../assets/image_Dishes_2.png" alt="dish2">
                <img src="../assets/image_Dishes_3.png" alt="dish3">
                <img src="../assets/image_Dishes_4.png" alt="dish4">
                <img src="../assets/image_Dishes_5.png" alt="dish5">
            </div>
        </div>
        <!-- Food section end -->


        <!-- Health Section start-->
            <div><Health/></div>
        <!-- Health Section end-->

        <!-- offer start -->
            <div><offers/></div>
        <!-- offer end -->

        <!-- special start -->
        <div><Special/></div>
        <!-- special end -->

        <!-- our restaurant start -->
            <div><Restaurant/></div>
        <!-- our restaurant end -->


        <!-- delivery-section start-->
            <div><Delivery/></div>
        <!-- delivery-section end-->

        <div>
            <Reasons/>
        </div>

    </div>

    <div><Footer/></div>

</template>
<script>

import navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Health from '@/components/Health.vue';
import offers from '@/components/Offers.vue';
import Special from '@/components/Special.vue';
import Restaurant from '@/components/Restaurant.vue';
import Delivery from '@/components/Delivery.vue';
import Reasons from '@/components/Reasons.vue'

export default {
    components: {
        navbar,
        Footer,
        Health,
        offers,
        Special,
        Restaurant,
        Delivery,
        Reasons
    
}
}
</script>
<style>
p{
    line-height: 1.3;
}
::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #f00a0a;
    border-radius: 10px;
}

::-webkit-scrollbar {
    width: 10px;
}
button{
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--fifth-color);
}
</style>

<style scoped>
*{
    --primary-color:rgba(204, 51, 51, 1);
    --second-color:rgba(42, 67, 93, 1);
    --third-color:rgba(255, 248, 238, 1);
    --fourth-color:rgba(75, 255, 60, 1);
    --fifth-color:rgba(255, 255, 255, 1);
     background-color: var(--third-color);

}
p{
    color: var(--second-color);
}
.container{
    text-align: center;   
    background-color: var(--third-color);
}
.container p{
    color: var(--second-color);
    font-weight: bold;
}
.container .food-images{
    margin-top: 20px;
}
.container .food-images img{
    margin-left: 15px;
}
.food h2{
    color: var(--primary-color);
    font-size: 35px;
    font-weight: bold;
}


/* delivery end */
</style>
