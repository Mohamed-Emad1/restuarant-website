<template>
    <link rel="stylesheet" href="src/normalize/normalize.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div>
        <navbar />
    </div>
    <section class="page-header ">
        <div class="container-2">
            <div class="page-header_wrap">
                <div class="page-heading">
                    <h1>CONTACT US</h1><br>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.</h4>

                </div>
            </div>
        </div>
    </section>
    <section class="part1">
        <div class="about" id="about">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-6" id="contact">
                     <h1 style="color: rgb(161, 13, 13);">ADDRESS</h1><br>
                     <div class="address">
                         <h6>28 Seventh Avenue, Neew York, 10014</h6><br>
                         <h6>+880 1630 225 015</h6><br>
                         <h6>resturents@gmail.com</h6>
                     </div>
                     <h1 style="color: rgb(161, 13, 13);">WORKING HOURS</h1><br>
                         <div class="address">
                             <h6>28 Seventh Avenue, Neew York, 10014</h6><br>
                             <h6>+880 1630 225 015</h6><br>
                             <h6>resturents@gmail.com</h6>
                         </div>
                         <h1 style="color: rgb(161, 13, 13);">FOLLOW US</h1><br>
                         
                             <img src="../assets/Social_media.png" alt="">
                         
                        
                    </div>
                    <div class="col-md-6">
                            <div class="card">
                                <img src="../assets/map.png" alt="">
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
   

<div>
    <Footer />
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

<style scoped>
* {
    --primary-color: rgba(204, 51, 51, 1);
    --second-color: rgba(42, 67, 93, 1);
    --third-color: rgba(255, 248, 238, 1);
    --fourth-color: rgba(75, 255, 60, 1);
    --fifth-color: rgba(255, 255, 255, 1);
    


    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body,
html {
    width: 100%;
    min-height: 100v;
    background-color: var(--third-color)
}

.page-header {
    background-image: url("../assets/image_contact_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: 0 none;
    margin: 0 auto;
    padding: 0;
    position: relative;
    z-index: 99;

}

.container {
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

#about {
    width: 80%;
    align-items: center;
}

#about .container {
    background-color:rgba(255, 248, 238, 1) ;
    align-items: center;
    border-radius: 10px;
    border-color: red;
    
}

#about-btn {
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

#about-btn:hover {
    background: #b2744c;
    color: white;
}


#about .card {
    border-radius: 10px;
}

#about .card img {
    border-radius: 10px;
}

@media screen and (max-width:982px) {
    #about p {
        font-size: 8px;
    }
}

@media screen and (max-width:766px) {
    #about p {
        font-size: 15px;
    }

}
#contact {
    padding-left: 60px;
}
.address {
    padding-left: 20px;
}

.card {
    background-color: #db1717
}


</style>