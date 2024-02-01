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
        <div class="health">
            <p style="margin-bottom: 15px;">RICH & HEALTHY</p>
            <div class="healthy-section">
                <img src="../assets/image_richHealthy_1.png" alt="chef">
                <div class="col2">
                    <h2>Highest quality artisangrains, proteins & seasonal ingredients</h2>
                    <p style="line-height: 1.7;">Righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so blinded
                        by desires, that they cannot foresee.</p>
                        <div class="inside">
                            <ul>
                                <li>Simple and easy to distinguish</li>
                                <li> Pleasure of the momentblinded desire</li>
                                <li> Able to do what we like best</li>
                            </ul>
                            <button>Read More</button>

                        </div>
                    </div>
                <img class="image-last" src="../assets/image_richHealthy_2.png" alt="">
            </div>
        </div>
        <!-- Health Section end-->

        <!-- offer start -->
        <div class="offer">
            <h2>Big offers</h2>
            <p>For in this week, take your food, buy your best one.</p>
            <img src="../assets/image_bigOffer_1.png" alt="offer1">
            <img src="../assets/image_bigOffer_2.png" alt="offer2">
            <img src="../assets/image_bigOffer_3.png" alt="offer3">
        </div>
        <!-- offer end -->


    </div>

    <div><Footer/></div>

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
<style>
/* body,
html {
    background-color: var(--third-color);
    margin: 0px;
    padding: 0px;
} */
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
.health{
    text-align: center;
    margin: 10px 70px;
}
.healthy-section{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 20px;
}
.healthy-section img{
    max-height: 600px;
}
.col2{
    grid-column: span 2;
    text-align: start;
}
.col2 h2{
    font-size: 35px;
}
.col2 p{
    font-size: 25px;
    margin-top: 40px;
}
.col2 .inside{
    margin-top: 80px;
    margin-left: 50px;
    font-size: 25px;
}
.col2 .inside li{
    margin-top: 20px;
}
.col2 .inside li::marker{
    color: var(--primary-color);
    padding: 4px;
}
.col2 .inside button{
    background-color: var(--primary-color);
    color: var(--fifth-color);
    border-radius: 5px;
    padding: 10px 80px;
    margin-top: 80px;
    border-color: var(--primary-color);
    font-weight: bold;
    font-size: 35px;
}
.image-last {
    margin-top: -400px;
  grid-column: 3; /* Positioning in the third column (rightmost) */
  grid-row: 2; /* Positioning in the third row (bottommost) */
  align-self: end; /*Align to the end (bottom) within the grid item*/
  max-height: 400px;
}
/* offer start */
.offer h2{
    color: var(--primary-color);
    font-size: 35px;
    font-weight: bold;
}
.offer p{
    margin-top: 10px;
    font-size: 17px;
color: var(--second-color);
}
.offer img{
    margin-top: 20px;
    margin-left: 15px;
}
/* offer end */
</style>
