<template>
    <div class="header">
        <nav class="header__main">
            <div class="header__logo">Robey</div>

            <div class="header__title">
                <i class="far fa-edit"></i>
                <p>Robey Customize <span>Teamwear</span></p>
            </div>

            <i class="header__close fas fa-times"></i>
        </nav>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Header',
});
</script>

<style lang="scss" src="./Header.scss">
</style>
