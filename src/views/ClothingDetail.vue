<template>
    <div class="clothing-detail">
        <div class="clothing-detail__main">test</div>

        <div
            v-for="choice in choices"
            :key="choice"
            :class="`clothing-detail__${choice}`"
        >
            {{ choice }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClothingDetail',

    data() {
        return {
            choices: ['shirt', 'shorts', 'socks', 'shoes', 'overview'],
        };
    },
};
</script>

<style lang="scss" src="./ClothingDetail.scss"></style>