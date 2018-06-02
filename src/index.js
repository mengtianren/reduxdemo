import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const themeReducer = (state, action) => {
    if(!state){
        return {themeColor:'red'}
    }
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state, themeColor : action.themeColor}
        default:
            return state
    }
}

const store = createStore(themeReducer)
class Index extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
