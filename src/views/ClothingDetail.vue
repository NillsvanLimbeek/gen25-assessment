<template>
    <div class="clothing-detail">
        <div class="clothing-detail__main">
            <div class="clothing-detail__product">Current Selection:</div>

            <div class="clothing-detail__sections">
                <router-link
                    v-for="section in sections"
                    :key="section"
                    class="clothing-detail__section"
                    :class="{
                        'clothing-detail__section--active':
                            $route.path === `/${section}`,
                    }"
                    :to="{ name: uppercase(section) }"
                >
                    {{ section }}
                </router-link>
            </div>
        </div>

        <div class="clothing-detail__details">
            <Details
                :section="$route.name"
                @next="nextSection"
                @previous="previousSection"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Section } from '@/lib/types';
import { uppercase } from '@/lib/utils';

const Details = () => import('@/components/details/Details.vue');

export default Vue.extend({
    name: 'ClothingDetail',

    components: {
        Details,
    },

    data() {
        return {
            sections: [
                'shirt',
                'shorts',
                'socks',
                'shoes',
                'overview',
            ] as Section[],
            counter: 0,
        };
    },

    watch: {
        $route() {
            if (this.$route.name) {
                const section = this.$route.name.toLowerCase() as Section;
                this.counter = this.sections.indexOf(section);
            }
        },
    },

    methods: {
        nextSection() {
            if (this.counter < this.sections.length - 1) {
                this.counter++;
                this.$router.push({
                    name: uppercase(this.sections[this.counter]),
                });
            }
        },

        previousSection() {
            if (this.counter > 0) {
                this.counter--;
                this.$router.push({
                    name: uppercase(this.sections[this.counter]),
                });
            }
        },

        uppercase(string: string) {
            return uppercase(string);
        },
    },
});
</script>

<style lang="scss" src="./ClothingDetail.scss"></style>
