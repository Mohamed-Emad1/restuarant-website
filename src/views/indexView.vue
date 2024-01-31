<template>
    <link rel="stylesheet" href="src/normalize/normalize.css">
    <link rel="stylesheet" href="src/normalize/colors.css">

    <div><navbar/></div>
    <div class="container">
    

    <div class="login">

    </div>
    </div>

    <div><Footer/></div>

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
*{
    --primary-color:rgba(204, 51, 51, 1);
    --second-color:rgba(42, 67, 93, 1);
    --third-color:rgba(255, 248, 238, 1);
    --fourth-color:rgba(75, 255, 60, 1);
    --fifth-color:rgba(255, 255, 255, 1);

}

</style>
