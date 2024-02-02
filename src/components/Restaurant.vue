<template>
                <div class="our-rest">
                    <p>OUR RESTAURANT</p>
                    <div class="rest-section">
                        <div class="images">
                            <img src="../assets/image_ourResturant_1.png" alt="">
                            <img src="../assets/image_ourResturant_2.png" alt="">
                            <img src="../assets/image_ourResturant_3.png" alt="">

                        </div>
                        <div>
                            <h2>For every specialoccasion there’s heritaste</h2>
                            <p>Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of the moment. Success Story.</p>

                        </div>
                        <div class="success">
                            <div class="logo">
                                <img src="../assets/growth 1.png" alt="">
                            </div>
                            <h3>Success Story</h3>
                            <p>Certain circumstances and owing to the claims of duty obligations of business it will frequently.</p>
                            <button>Read More</button>

                            <div class="logo">
                                <img src="../assets/cooking 1.png" alt="">
                            </div>
                            <h3>Passionate Chefs</h3>
                            <p>Duty or the obligations of business it frequently occur pleasures have to be repudiated.</p>
                        </div>
                    </div>
                </div>
</template>

<style scoped>
/* restaurant start*/
.rest-section{
    margin-top: 30px;
    display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 20px;
}
.rest-section .images{
    grid-area: 1 / 1 / 3 /2;
}
.rest-section .success{
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    margin-bottom: 180px;
}
.rest-section div:not(:first-child){
    margin-right: 120px;
    text-align: left;
}
.rest-section div:nth-child(2) h2{
    color: var(--second-color);
    font-size: 35px;
    margin-right: 50px;
    font-weight: bold;
}
.rest-section .success{
    position: relative;
}
.rest-section .success .logo{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    position: absolute;
    left: -100px;
}
.rest-section .success .logo img{
    text-align: center;
    margin-left: 19px;
    margin-top: 20px;
}
.rest-section .success button{
    background-color: var(--primary-color);
    padding: 7px 30px;
    border-radius: 18px;
    color: var(--fifth-color);
    margin-top: 15px;
    margin-bottom: 18px;
    border: none;
}
.rest-section .success h3{
    font-size: 35px;
    color: var(--primary-color);
    margin-bottom: 20px;
}
/* restaurant end */
</style>    