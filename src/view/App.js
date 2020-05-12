import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
//redux数据仓库
import store from '../store/index';
//组件
import Home from "./home/Home.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Home/>
                        <Redirect from="*" to="/"></Redirect>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;