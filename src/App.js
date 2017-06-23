import React from 'react';
import {  IndexLink, Link } from 'react-router-dom';
import {  HashRouter,hashHistory, IndexRoute, Router, Route } from 'react-router-dom';
import './App.css';
import Home  from './Home';
import Stuff  from './Stuff';
import Contact  from './Contact';
 
class App extends React.Component {
  render() {
            return (
            <HashRouter>
                <div>
				<Route path="/" component={Urls} />
					<Route component={Home}/>
					<Route path="stuff" component={Stuff} />
					<Route path="contact" component={Contact} />
				
                </div>
			</HashRouter>            
            ) 
        }
}
class Urls extends React.Component {
            render() {
                return (
                <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><Link to="/" activeClassName='active'>Home</Link></li>
                    <li><Link to="/stuff" activeClassName='active'>Stuff</Link></li>
                    <li><Link to="/contact" activeClassName='active'>Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
                )
            }
}
export default App;