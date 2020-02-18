// Action Creator
export const selectResource = resource => {
    return {
        type: 'SELECT_RESOURCE',
        payload: resource
    };
};