import React from 'react';
import styles from './styles.scss';

export default React.createClass({

	displayName: 'Resume',

	render () {

		let { data } = this.props;

		console.log(data);

		return (
			<div className="title-shadow">
				{data.name}!
			</div>
		);
	}

});