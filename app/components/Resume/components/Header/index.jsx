import React from 'react';
import styles from './styles.scss';

export default React.createClass({
	displayName: 'Header',
	render () {
		let { basics } = this.props;
		return (
			<div className={styles.header}>
				<h1 className={styles.name}>{basics.name}</h1>
				<address className={styles.address}>
					{basics.email}<br/>
					{basics.phone}
				</address>
			</div>
		);
	}
});