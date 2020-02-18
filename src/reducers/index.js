import { combineReducers } from 'redux';

const resourcesReducer = () => {
    return [
        {
            name: 'Manohar Mankala',
            location: 'Columbus, OH',
            gender: 'M'
        },
        {
            name: 'Priyanka Chetty',
            location: 'Columbus, OH',
            gender: 'F'
        },
        {
            name: 'Lijash Mohammed',
            location: 'Orange County, CA',
            gender: 'M'
        },
        {
            name: 'Lin Joseph',
            location: 'Austin, TX',
            gender: 'M'
        },
        {
            name: 'Nikhil Narula',
            location: 'Dallas, TX',
            gender: 'M'
        }
    ];
};

const selectedResourceReducer = (selectedResource = null, action) => {
    if (action.type === 'SELECT_RESOURCE') {
        return action.payload;
    }

    return selectedResource;
}

export default combineReducers({
    resources: resourcesReducer,
    selectedResource: selectedResourceReducer
});