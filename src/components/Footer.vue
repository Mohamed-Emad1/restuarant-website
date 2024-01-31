<template>
     <link rel="stylesheet" href="src/normalize/colors.css">
     
    <p class="title">Our Branch</p>
    <div class="container">
        <div class="main">
            <div class="person1">
                <p>Robert Food</p>
                <p style="font-weight: bold;">1986 Hilltop DriveBorger, TX 79007</p>
                <div class="times-phones">

                    <div class="cl" style="width: 70px;">
                    <img src="../assets/watch_icon.png" alt="clock">
                    <p>7:30 - 9:30</p>
                    </div>
                    <div class="watch">
                    <img src="../assets/phone_icon.png" alt="watch">
                    <p>+880 1630 225 015</p>

                    </div>
                </div>
                <p class="last" @click="">Click to View Google Map</p>
            </div>

                        <div class="person2">
                    <p>Mark A. Reed Food</p>
                    <p>4877 Rose AvenueNew Orleans, LA 70112</p>
                    <div class="times-phones">

                        <div class="cl" style="width: 70px;">
                        <img src="../assets/watch_icon.png" alt="clock">
                        <p>7:30 - 9:30</p>
                        </div>
                        <div class="watch">
                        <img src="../assets/phone_icon.png" alt="watch">
                        <p>+880 1630 225 015</p>

                        </div>
                    </div>
                    <p class="last" @click="">Click to View Google Map</p>
                </div>

                <div class="person3">
                    <p>Karie K. Hill Food</p>
                    <p>1509 Peaceful LaneCleveland, OH 44115</p>
                    <div class="times-phones">

                        <div class="cl" style="width: 70px;">
                        <img src="../assets/watch_icon.png" alt="clock">
                        <p>7:30 - 9:30</p>
                        </div>
                        <div class="watch">
                        <img src="../assets/phone_icon.png" alt="watch">
                        <p>+880 1630 225 015</p>

                        </div>
                    </div>
                    <p class="last" @click="">Click to View Google Map</p>
                </div>

        </div>
        <div class="rights">
            Copyright &copy; 2024 | Mohamed & Ali
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
.title{
    margin-top: 60px;
    color: var(--second-color);
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}
p{
    line-height: 0.5;
}
.main{
    margin-top: 20px;
    height: 200px;
    width: 100%;
    background-color: var(--primary-color);
    color: var(--fifth-color);
    display: flex;
    justify-content: space-around;
}
.main div p:first-child{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
}


.main .times-phones{
    display: flex;
    width: 100%;
}
.main .times-phones .cl,.watch{
    /* margin-left: 150px; */
    width: 120px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
}

.main .times-phones .cl,.watch p{
    font-size: 10px;
    line-height: 0.1;
}
.main .times-phones .cl,.watch img{
    /* margin-top: 10px; */
    width: 15px;
    height: 15px;

}
.main .last{
    text-align: center;
    color: var(--fourth-color);
    cursor: pointer;
}
    .rights{
    height: 100px;
    width: 100%;
        background-color: var(--second-color);
    color: var(--fifth-color);
    text-align: center;
    position: relative;
    font-weight: 800;
    line-height: 6;
}



      @media(max-width:991px){

      }
    @media(max-width:767px){
        .main{
            height: 540px;
        flex-direction: column;
        text-align: center;
        }
        .rights{

        }

    }
</style>