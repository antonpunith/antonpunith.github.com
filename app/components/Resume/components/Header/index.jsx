import React from 'react';

export default React.createClass({
	displayName: 'Header',
	render () {
		let { basics } = this.props;
		return (
			<div>
				<h1>{basics.name}</h1>
				<address>
					{basics.email}<br/>
					{basics.phone}
				</address>
			</div>
		);
	}
});