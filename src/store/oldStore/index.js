import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import methods from './methods';
import state from './state';

//初始化state
let data = state;
//创建出reducer函数
let ActionFnObj = methods;
function reducer(state = data, action) {
    console.log(action);
    
    if (action.type.indexOf('redux') === -1) {
        state = ActionFnObj[action.type](state, action)
        return { ...state }
    } else {
        return state;
    }
}

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);

export default store