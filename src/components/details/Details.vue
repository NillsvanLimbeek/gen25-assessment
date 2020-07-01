<template>
    <div class="details">
        <div class="details__header">
            <i
                class="details__arrow fas fa-angle-left"
                @click="$emit('previous')"
            />

            {{ section }}

            <i
                class="details__arrow fas fa-angle-right"
                @click="$emit('next')"
            />
        </div>

        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Section } from '@/lib/types';

export default Vue.extend({
    name: 'Details',

    props: {
        section: {
            type: String as () => Section,
            required: true,
            default: 'shirt',
        },
    },
});
</script>

<style lang="scss" src="./Details.scss"></style>
