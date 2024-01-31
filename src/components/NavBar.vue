<template>
     <link rel="stylesheet" href="src/normalize/colors.css">

<div class="container">
    <div class="top">

        <div class="cl">

        
        <img src="../assets/watch_icon.png" alt="clock">
        <p>7:30 - 9:30</p>
        </div>
        <div class="watch">
        <img src="../assets/phone_icon.png" alt="watch">
        <p>+880 1630 225 015</p>
        </div>

        <p @click="">REGISTER</p>

    </div>
    <div class="main-nav">
        <div class="container">
        <img src="../assets/logo.png" alt="logo">
        <ul class="list">
            <li @click="">
                HOME
            </li>
            <li @click="">
                ABOUT
            </li>
            <li @click="">
                BLOG
            </li>
            <li @click="">
                PAGE
            </li>
            <li @click="">
                CONTACT
            </li>


        </ul>
        <div class="delivery">
            <div class="cart" style="position: relative;">
                <img src="../assets/cart_icon.png" alt="" style="position: absolute;">
            </div>
            <div>
                <p>Delivery order</p>
                <p>+880 1630 225 015</p>

            </div>
            <img src="../assets/food 1.png" alt="">
        </div>

        <button ><router-link style="list-style: none; color: var(--fifth-color); text-decoration: none;" to = '/loginViewVue'>LOGIN</router-link> </button>
        </div>
    </div>

</div>

</template>

<script>




export default {

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
    box-shadow: 0px 10px 15px #888888;;
}
.top{
    height: 35px;
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;

}
.top .cl,.watch{
    margin-left: 150px;
    width: 150px;
    display: flex;
    justify-content: space-between;
}
.top img{
    width: 20px;
    height: 20px;
    margin: 6px 0px 0px 7px;
}

.top p{
    margin: auto;
    color: var(--fifth-color);
    font-size: 10px;
}

.main-nav{
    height: 100px;
    width: 100%;
    background-color: var(--third-color);
}
.main-nav .container{
    display: flex;
    justify-content: space-between;
}
.main-nav .container> img{
    width: 112px;
    height: 75px;
    margin: 10px 70px;
}
.main-nav .container .list{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    list-style: none;
}
.main-nav .container .list li{
    margin: 25px 18px;
    font-weight: 600;
    color: var(--second-color);
    cursor: pointer;
}
.main-nav .container .delivery{
    display: flex;
}
.main-nav .container .delivery .cart{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: var(--second-color);
    margin-top: 28px;
    margin-right: 20px;
}
.main-nav .container .delivery .cart img{
    left: 10px;
    top: 18px;
}
.main-nav .container .delivery div >p{
    color: var(--second-color);


}
.main-nav .container .delivery div >p:first-child{
    font-weight: bold;
    font-size: 20px;
    
}
.main-nav .container .delivery >img{
    height: 35px;
    width: 35px;
    margin-left: 18px;
    margin-top: 26px;
}

.main-nav .container button{
    width: 90px;
    height: 35px;
    color: var(--fifth-color);
    background-color: var(--primary-color);
    text-align: center;
    margin-top: 27px;
    margin-right: 50px;
    border: none;
    outline: none;
    border-radius: 15px;
}
</style>