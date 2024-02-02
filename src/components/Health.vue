<template>
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
    </template>

<style scoped>
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
    color: var(--primary-color);
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
</style>