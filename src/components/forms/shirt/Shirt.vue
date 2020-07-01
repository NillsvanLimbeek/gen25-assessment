<template>
    <div class="shirt">
        <div class="shirt__header">
            <p>Base</p>
            <i class="fas fa-angle-up"></i>
        </div>

        <div class="shirt__base">
            <p>Pattern</p>
            <div
                v-for="pattern in patterns"
                :key="pattern"
                class="shirt__pattern"
            >
                <!-- TODO create custom radio button component -->
                <input
                    type="radio"
                    name="pattern"
                    :id="pattern"
                    :value="pattern"
                    v-model="selection.pattern"
                />
                <label :for="pattern">{{ pattern }}</label>
            </div>
        </div>

        <div class="shirt__color">
            <p>Color A</p>
            <div v-for="color in colors" :key="color" class="shirt__color">
                <!-- TODO create custom radio button component -->
                <input
                    type="radio"
                    name="a-color"
                    :id="`a-${color}`"
                    :value="color"
                    v-model="selection.colorA"
                />
                <label :for="`a-${color}`">{{ color }}</label>
            </div>
        </div>

        <div v-if="selection.pattern !== 'plain'" class="shirt__color">
            <p>Color B</p>
            <div v-for="color in colors" :key="color" class="shirt__color">
                <!-- TODO create custom radio button component -->
                <input
                    type="radio"
                    name="b-color"
                    :id="`b-${color}`"
                    :value="color"
                    v-model="selection.colorB"
                />
                <label :for="`b-${color}`">{{ color }}</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Pattern, Color } from '@/lib/types';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'Shirt',

    data() {
        return {
            patterns: ['plain', 'two-tone', 'stripe'] as Pattern[],
            colors: [
                'black',
                'yellow',
                'orange',
                'red',
                'blue',
                'green',
            ] as Color[],
            selection: {
                pattern: 'plain',
                colorA: 'black',
                colorB: 'black',
            },
        };
    },

    watch: {
        selection: {
            deep: true,
            handler() {
                this.$store.dispatch('shirt/setSelection', this.selection);
            },
        },
    },

    computed: {
        ...mapGetters({
            shirtSelection: 'shirt/getSelection',
        }),
    },

    mounted() {
        this.selection = this.shirtSelection;
    },
});
</script>

<style lang="scss" src="./Shirt.scss"></style>
