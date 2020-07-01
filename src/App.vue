<template>
    <div id="app">
        <Header />

        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Header = () => import('@/components/header/Header.vue');

export default Vue.extend({
    name: 'App',

    components: {
        Header,
    },
});
</script>

<style lang="scss" src="./styling/main.scss"></style>
