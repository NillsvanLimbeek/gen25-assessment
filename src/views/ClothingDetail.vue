<template>
    <div class="clothing-detail">
        <div class="clothing-detail__main">
            <div class="clothing-detail__product">test</div>

            <div class="clothing-detail__sections">
                <div
                    v-for="section in sections"
                    :key="section"
                    class="clothing-detail__section"
                >
                    {{ section }}
                </div>
            </div>
        </div>

        <div class="clothing-detail__details">Detail</div>
    </div>
</template>

<script>
export default {
    name: 'ClothingDetail',

    data() {
        return {
            sections: ['shirt', 'shorts', 'socks', 'shoes', 'overview'],
        };
    },
};
</script>

<style lang="scss" src="./ClothingDetail.scss"></style>