<template>
    <link rel="stylesheet" href="src/normalize/normalize.css">
    <link rel="stylesheet" href="src/normalize/colors.css">

    <div>
        <navbar />
    </div>
    <div class="container">
        <img src="../assets/Rectangle 58.png" alt="background" style="max-width: 100%;">

        <div class="reg">
            <div class="login">
                <form action="" name="login">
                    <h3 class="header">Login</h3>
                    <p class="p">Username or email address *</p>
                    <input type="email">
                    <p class="p">Password *</p>
                    <input type="password">
                    <br>
                    <button @click="">Login</button>
                    <br>
                        <input type="checkbox" name="" id="" style="background-color: var(--third-color);">
                        <span>remember me</span>
                    <p class="p" style="color: var(--fourth-color);">LOST YOUR PASSWORD?</p>


                </form>
            </div>

            <div class="register">
                <form action="">
                    <h3 class="header">Register</h3>
                        <p class="p">Email address *</p>
                        <input type="email">
                        <p class="p">A link to set a new password will be sent to your email address.</p>
                         <button @click="">Register</button>

                </form>

            </div>
        </div>
    </div>

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

}
.reg{
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
}
.reg .login,.register{
    /* display: flex; */
    width: 580px;
    height: 455px;
    background-color: var(--third-color);
}
.container .login input,.register input{
    width: 300px;
    height: 35px;
    border-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    outline: none;
}
.container .login,.register h3,p{
    color: var(--primary-color);
}
.container .login button,.register button{
    margin-top: 10px;
    background-color: var(--primary-color);
    color: var(--fifth-color);
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    width: 100px;
    height: 40px;
    cursor: pointer;
}
.container .login input:nth-last-of-type(1){
    width: 25px;
    margin-top: 20px;
    position: relative;
    padding: 8px;
    accent-color: var(--third-color);

}
.container .login span{
    left: 90px;
    bottom: -60px;
    position: absolute;
    font-size: 23px;
    color: black;
}
.container .register >*{
    margin-left: 30px;
}
.header{
    font-weight: bold;
    font-size: 25px;
}
.p{
    font-size: 15px;
}



  @media(max-width:991px){
    .reg{
        flex-direction: column;
  }
  .reg .login,.register{
    width: 200px;
  }
  .container .login input,.register input{
    width: 150px;
  }
}
@media(max-width:767px){
    .reg{
        flex-direction: column;
    }
    .reg .login,.register{
        width: 200px;
    }
      .container .login input,.register input{
    width: 130px;
  }
  .container .login span{
    bottom:175px;
    left: 30px;
    font-size: 15px;
  }
}
</style>
