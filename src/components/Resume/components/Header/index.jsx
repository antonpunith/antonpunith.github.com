import React from 'react';
import styles from './styles.scss';


const Header = ({ basics }) => {
	return (
		<div className={styles.header}>
			<h1 className={styles.name}>{basics.name}</h1>
			<address className={styles.address}>
				{basics.email}<br />
				{basics.phone}
			</address>
		</div>
	);
}

export default Header;