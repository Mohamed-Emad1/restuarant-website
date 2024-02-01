<template>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   <div>
          <navbar />
      </div>
  <section class="page-header ">
    <div class="container">
      <div class="page-header_wrap">
        <div class="page-heading">
          <h1>About Us</h1><br>
          <h4>Read our story,How we start and about the team.</h4>

        </div>
      </div>
    </div>
  </section>
  <section class="part1" >
   <div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <img src="../assets/image_about_1.png" alt="">
          </div>
        </div>
        <div class="col-md-6">
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
            <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus dicta quia maxime! Suscipit rerum similique non perferendis maiores rem, cumque explicabo exercitationem deserunt illum in aperiam natus impedit recusandae?
            <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem voluptates harum, quis excepturi voluptatum!
           </p>
        </div>
      </div>
    </div>
  </div>
  </section>
  <div class="our"><h1>Our story</h1></div>
  <section class="part2">
    <div class="container">
        <div class="row">
          
          <div class="col-md-6">
          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
              <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus dicta quia maxime! Suscipit rerum similique non perferendis maiores rem, cumque explicabo exercitationem deserunt illum in aperiam natus impedit recusandae?
              <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem voluptates harum, quis excepturi voluptatum!
             </p>
          </div>
          <div class="col-md-6">
              <div class="card">
                <img src="../assets/about2.jpeg" alt="">
              </div>
            </div>
        </div>
      </div>
  </section>
  <section class="part3">
   <div class="container">
          <div class="row">
          
            <div class="col-md-9">
              <h4>TASTY AND CRUNCHY</h4>
              <h1>Our Chef</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
                <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus dicta quia maxime! Suscipit rerum similique non perferendis maiores rem, cumque explicabo exercitationem deserunt illum in aperiam natus impedit recusandae?
                <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem voluptates harum, quis excepturi voluptatum!
               </p>
               <button id="about-btn">View our all menu.</button>
            </div>
            <div class="col-md-3">
                <div class="card">
                  <img src="../assets/image_ourChef.png" alt="">
                </div>
              </div>
          </div>
        </div>
  </section>
  <section class="part4">
    <div><h1>special service</h1></div>
    <div><h6>What Special services we are offering now</h6></div>
    <div class="container">
            <div class="row">
          
              <div class="col-md-6">
                <h2>Birthday Party</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
                 
                 </p>
                 
              </div>
              <div class="col-md-6">
                <h2>Wedding Party</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima numquam porro consequuntur ipsum, nulla aliquam amet quam consequatur expedita.
                   </p>
                </div>
            </div>
          </div>
           <div><h1>OUR TEAM</h1></div>
      <div><h5>The Hardworking Team behind the restaurant</h5></div>
      <div class="container">
              <div class="row">
          
                <div class="col-md-4">
                  <div class="card">
                    <img src="../assets/card3.png" alt="">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <img src="../assets/card2.png" alt="">
                  </div>
                  </div>
                  <div class="col-md-4">
                   <div class="card">
                    <img src="../assets/card1.png" alt="">
                  </div>
                    </div>
              </div>
            </div>
  </section>
   <div>
      <Footer></Footer>
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
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

html::-webkit-scrollbar-track{
  background: transparent;
}

html::-webkit-scrollbar-thumb{
  background: #f00a0a;
  border-radius: 10px;
}
html::-webkit-scrollbar{
  width: 10px;
}
.page-header {
    background-image: url("../assets/image_about-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: 0 none;
    margin: 0 auto;
    padding: 0;
    position: relative;
}
.container{
  margin-top: 5%;
}
.page-header_wrap {
    padding: 60px 0;
    position: relative;
    text-align: center;
}

.page-heading {
    z-index: 1;
    position: relative;
}

.page-heading h1 {
    font-size: 40px;
    color: #ffffff;
    margin: 0 auto;
}
.page-heading h4 {
    font-size: 15px;
    color: #eceaea;
    margin: 0 auto;
}

#about{
  width: 80%;
  align-items: center;
}
#about .container{
 
  border-radius: 10px;
  border-color: red;
}
#about-btn{
  width: 200px;
  height: 36px;
  background-color: #db1717;
  border: 2px solid #ed2405;
  color: #fbfafa;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
}
#about-btn:hover{
  background: #b2744c;
  color: white;
}
.heading{
  text-align: center;
  margin-bottom: 50px;
  color: black;
  font-size: 30px;
  font-weight: bold;
}

#about .card{
  border-radius: 10px;
}
#about .card img{
  border-radius: 10px;
}

@media screen and (max-width:982px){
  #about p{
    font-size: 8px;
  }
}
@media screen and (max-width:766px){
  #about p{
    font-size: 15px;
  }

}
.our {
    text-align: center;
  margin-bottom: 50px;
  color: rgb(245, 17, 17);
  font-size: 30px;
  font-weight: bold;
}
.card{
  background-color: #db1717
}
.part3{
  background-image: url("../assets/Rectangle_62.png");
   background-repeat: no-repeat;
    background-size: cover;
    border: 0 none;
    margin: 0 auto;
    padding: 0 auto;
    margin-top: 5%;
    position: relative;
}
.part3 h4{
  color: #f00a0a;
}
.part3 h1{
  color: #161734;
}
.part3 img{
height: 100%;
}
.part4{
  background-color: #faf9da;
   text-align: center;
  margin-bottom: 50px;
  padding: 2%;
  font-size: 30px;
  
}
.part4 h6,h2{
  color: #ed2405;
}
</style>