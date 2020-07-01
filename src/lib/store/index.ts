import Vue from 'vue';
import Vuex from 'vuex';

import { shirt } from './shirt';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { shirt },
});
