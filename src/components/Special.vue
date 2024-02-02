<template>
    <div class="special">
                <h2>SPECIALS MENU FOR ALL TIME</h2>
                <div class="menu">
                    <div class="sf">
                        <img src="../assets/image_specialManu_1.png" alt="">
                        <p>Burger</p>

                    </div>
                    <div class="sf">
                        <img src="../assets/image_specialManu_2.png" alt="">
                        <p>Fried chicken</p>

                    </div>
                    <div class="sf">
                        <img src="../assets/image_specialManu_3.png" alt="">
                        <p>Doner with Grilled Chicken</p>

                    </div>
                    <div class="sf">
                        <img src="../assets/image_specialManu_4.png" alt="">
                        <p>Pizza</p>

                    </div>
                    <div class="sf">
                        <img src="../assets/image_specialManu_5.png" alt="">
                        <p>Hot Dogs</p>

                    </div>
                    <div class="sf">
                        <img src="../assets/image_specialManu_6.png" alt="">
                        <p>Chicken Skewers</p>

                    </div>

                    <div class="sf">
                        <img src="../assets/image_specialManu_7.png" alt="">
                        <p>Greek Salad</p>

                    </div>

                    <div class="sf">
                        <img src="../assets/image_specialManu_8.png" alt="">
                        <p>Dahi Puri</p>

                    </div>

                    <div class="sf">
                        <img src="../assets/image33.png" alt="">
                        <p>Ice cream with Chocolate</p>

                    </div>

                    <div class="sf">
                        <img src="../assets/image_specialManu_10.png" alt="">
                        <p>Cocktail Glasses</p>

                    </div>
                </div>
            </div>
</template>

<style scoped>
*{
    --primary-color:rgba(204, 51, 51, 1);
    --second-color:rgba(42, 67, 93, 1);
    --third-color:rgba(255, 248, 238, 1);
    --fourth-color:rgba(75, 255, 60, 1);
    --fifth-color:rgba(255, 255, 255, 1);

}
/* special start */
.special{
    color: var(--primary-color);
    text-align: center;
}
.special .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 100px;
}
.special .menu .sf{
    width: 180px;
    height: 180px;
    
    
}

.special .menu .sf img{
    margin-top: 20px;
}
.special .menu .sf:hover p{
    background-color: var(--primary-color);
    color: var(--fifth-color);
}
.special .menu .sf:hover{
    background-color: var(--primary-color);

}
/* special end */
</style>