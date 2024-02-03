<template>
    <h4>Why we are the best</h4>
    <div class="container">
        <div class="r1">
            <div class="circle">
                <span>1</span>
                <img src="../assets/cooking1.png" alt="">
            </div>
            <h5>Passionate Chefs</h5>
            <p>Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.</p>
            <button>Read More</button>
        </div>
        <div class="r2">
            <div class="circle">
                    <span>2</span>
                    <img src="../assets/diet_1.png" alt="">
                </div>
                <h5>100 % Fresh Foods</h5>
                <p>Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.</p>
                <button>Read More</button>
        </div>
        <div class="r3">
            <div class="circle">
                    <span>3</span>
                    <img src="../assets/candle_1.png" alt="">
                </div>
                <h5>Memorable Ambience</h5>
                <p>Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.</p>
                <button>Read More</button>
        </div>
    </div>

    </template>


<style scoped>
h4{
    margin-top: 30px;
    color: var(--primary-color);
}
.container{
    display: flex;
    margin-top: 50px;
    /* margin-bottom: 50px; */
}
.container > div{
    margin: 5px 30px;
    transition: 1s;
}
.container > div .circle{
    width: 100px;
    height:100px;
    border-radius: 50%;
    background-color: var(--primary-color);
    position: relative;
    transition: 1s;
    text-align:right;
    margin-left: 200px;
    margin-top: 15px;
}

.container > div .circle img{
    position: absolute;
    left: -66px;
    top: 18px;
    transition: 1s;
}
.container > div .circle span{
    position: absolute;
    color: var(--fifth-color);
    font-size: 30px;
    font-weight: bold;
    left: 43px;
    top: 31px;
    transition: 1s;
}
.container > div h5{
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: bold;
    color: var(--second-color);
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    transition: 1s;

}
.container > div p{
    line-height: 1.2;
    margin-bottom: 25px;
    text-align: left;
    font-size: 15px;
    color: var(--second-color);
    transition: 1s;
    margin: 0px 10px;
}
.container > div button{
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    margin-left: 150px;
    margin-bottom: 40px;
    margin-top: 30px;
    transition: 1s;
}
.container > div:hover{
    background-color: var(--primary-color);
    
}
.container .r1:hover button  {
    background-color: var(--fifth-color);
    color: var(--primary-color);
}
.container .r2:hover button  {
    background-color: var(--fifth-color);
    color: var(--primary-color);
}
.container  .r3:hover button  {
    background-color: var(--fifth-color);
    color: var(--primary-color);
}

.container > .r1:hover .circle {
    background-color: var(--fifth-color);
    color: var(--fifth-color);
}
.container > .r2:hover .circle {
    background-color: var(--fifth-color);
    color: var(--fifth-color);
}
.container > .r3:hover .circle{
    background-color: var(--fifth-color);
    color: var(--fifth-color);
}

.container .r1:hover .circle span {
    color: var(--primary-color);
}
.container .r2:hover .circle span {
    color: var(--primary-color);
}
.container .r3:hover .circle span {
    color: var(--primary-color);
}

.container .r1:hover h5,.container .r1:hover p {
    color: var(--fifth-color);
}
.container .r2:hover h5,.container .r2:hover p {
    color: var(--fifth-color);
}
.container .r3:hover h5,.container .r3:hover p {
    color: var(--fifth-color);
}

      @media(max-width:991px){
        .container{
            flex-direction: column;
        }
      }
    @media(max-width:767px){
                .container{
            flex-direction: column;
            justify-content: space-between;
        }

    }
</style>