import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});

// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);


const store = createStore(reducers,
    window.devToolsExtension
    && window.devToolsExtension()
)
export default store;