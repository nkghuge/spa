import React from 'react';
import ReactDom from 'react-dom';
import {  hashHistory, IndexRoute, Router, Route } from 'react-router';
import App  from './App';
import Home  from './Home';
import Stuff  from './Stuff';
import Contact  from './Contact';

/*class DefaultRoute extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="stuff" component={Stuff} />
					<Route path="contact" component={Contact} />
				</Route>
			</Router>
		)
	}
}*/

ReactDom.render(
    <App />,
    document.getElementById('container')
);