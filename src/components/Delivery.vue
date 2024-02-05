<template>
                <div class="delivery-section">
                    <div class="description">
                        <h3>Delivery</h3>
                        <h1>A Moments Of </h1>
                        <h2>Delivered On Right Time & Place</h2>
                    
                    
                        <p>Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in
                        Farringdon's Exmouth Market. With glazed frontage on two sides of the building,
                        overlooking the market and a bustling London inteon.</p>

                        <div class="info">
                            <p>Delivery Order <br> <span>+880 1630 225 015</span> </p>
                            <img src="../assets/food_1.png" alt="">
                            <button class="order-now"> <router-link class="order-now" style="text-decoration: none; color: var(--fifth-color);" to="/itemsViewVue">Order Now</router-link> </button>
                        </div>
    

                    </div>
                    <img src="../assets/image_delivery.png" alt="dl">
                </div>
    </template>


<style scoped>
/* delivery start */
.delivery-section{
    margin: 30px 100px 0px 100px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 20px;
}
.delivery-section .description{
    text-align: left;
}

.delivery-section .description h1,h2{
    font-size: 35px;
    font-weight: bold;
}
.delivery-section .description h2{
    color: var(--primary-color);
}

.delivery-section .description h3{
    text-align: center;
    color: var(--primary-color);
}
.delivery-section .description p{
    margin-top: 15px;
}
.delivery-section .description .info{
    margin-top: 30px;
    display: flex;
}
.delivery-section .description .info > *{ /*select all childs*/
    margin: 10px 8px 0px 8px;
}
.delivery-section .description .info button{
    margin-left: 180px;
    background-color: var(--primary-color);
    color: var(--fifth-color);
    border-radius: 8px;
    padding: 8px 30px;
    border: none;
    cursor: pointer;
    transition: 0.8s;
}
.delivery-section .description .info button:hover{
    background-color: rgb(137, 42, 23);
}

</style>