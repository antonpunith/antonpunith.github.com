import React from 'react';

export default React.createClass({

	displayName: 'Hello',

	render () {
		const {
			greet, message, resume
		} = this.props;
		return (
			<div className="title-shadow">
				{greet} {message} {resume.name}
			</div>
		);
	}

});
