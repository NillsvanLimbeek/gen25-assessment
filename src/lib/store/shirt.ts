import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';

import { RootState, ShirtState, Selection } from '@/lib/types';
import { generateShirtId } from '@/lib/utils';

const state: ShirtState = {
    selection: {
        pattern: 'plain',
        colorA: 'black',
    },
    shirtId: '',
};

const getters: GetterTree<ShirtState, RootState> = {
    getSelection: (state) => state.selection,

    getShirtId: (state) => state.shirtId,
};

const mutations: MutationTree<ShirtState> = {
    setSelection: (state, selection: Selection) => {
        state.selection = selection;
    },

    setShirtId: (state) => {
        state.shirtId = '';

        const correctIds = ['st0106', 'st0206', 'st0201', 'st0102'];
        const shirtId = generateShirtId(state.selection);

        // only show the correct img, otherwise the app chrashes
        if (correctIds.includes(shirtId)) {
            state.shirtId = generateShirtId(state.selection);
        }
    },
};

const actions: ActionTree<ShirtState, RootState> = {
    async setSelection({ commit }, selection: Selection) {
        await commit('setSelection', selection);
        commit('setShirtId');
    },
};

export const shirt: Module<ShirtState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
