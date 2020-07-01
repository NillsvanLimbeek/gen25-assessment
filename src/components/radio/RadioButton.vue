<template>
    <div class="radio">
        <input
            type="radio"
            :name="name"
            :id="name"
            :value="value"
            @change="$emit('value', value)"
        />
        <label :for="name">{{ name }}</label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RadioButton',

    props: {
        name: { type: String, required: true, default: '' },
        value: { type: String, required: true, default: '' },
    },
});
</script>

<style lang="scss" src="./RadioButton.scss"></style>
