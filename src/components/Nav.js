import React, { Component } from 'react';

class Nav extends Component {


	render () {
//estoy pasando por props el title que está en app. Se puede poner operaciones matematicas, etc dentro de los corchetes.
		return (
			<nav className="navBar navBar-dark bg-dark">
				<a href="" className="text-white">
			{this.props.title} 
				</a>
			</nav>
		)
	}
}

export default Nav;