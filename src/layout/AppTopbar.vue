<template>
    <div class="layout-topbar">
        <router-link to="/dashboard" class="layout-topbar-logo"> </router-link>
        <div>
            <img :src="czb_logo" alt="logo" />
        </div>
        <div class="cbs">
            <p class="cbsP">CITIZENS BANK PLC<span style="font-size: 25px"> (CZB DASHBOARD)</span></p>
        </div>
    </div>
</template>

<script setup>
import czb_logo from '../assets/logo-only.png';
</script>

<style scoped>
.cbs {
    margin-left: -5%;
}
.cbsP {
    font-size: 30px;
    font-weight: 700;
    color: #a7090b;
    text-shadow: 5px 5px 5px #c4c1c1, 3px 3px 3px rgba(212, 216, 216, 0.767);
    /* text-shadow: 2px 2px #aca7a7; */
    /* text-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}
img {
    height: auto;
    width: 15%;
    margin-left: 55%;
    /* box-shadow: 5px 5px 5px #c4c1c1, 3px 3px 3px rgba(212, 216, 216, 0.767); */
}
</style>
