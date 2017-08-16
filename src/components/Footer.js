import React, {Component} from 'react'
import Link from './Link'

class Footer extends Component {
	static defaultProps = {
		className: 'Nav row no-gutters items-center space-between'
	}

	render() {
		const {className} = this.props

		return (
			<footer className={className}>
				<small>Copyright 2017 | All Rights Reserved</small>
				<div>
					<Link to="/privacy">Privacy Policy</Link>
					<span> | </span>
					<Link to="/terms">Terms of Service</Link>
				</div>
			</footer>
		)
	}
}

export default Footer

