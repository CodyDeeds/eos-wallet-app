import React, {Component} from 'react'
import {Route} from 'react-router'
import {
	Header,
	Footer,
	Navbar} from '../components'
import {
	About,
	Faqs,
	Home,
	NoMatch,
	Permissions,
	Preferences,
	Profile,
	TransactionHistory,
	Transfer,
	Users} from '../routes'

const Scene = ({
	children,
	className = 'main-content',
	...props}) =>
	<div className={className} {...props}>{children}</div>

class App extends Component {
	static defaultProps = {
		className: 'app container-fluid p-0 row no-gutters d-flex'
	}

	render() {
		const {className} = this.props

		return (
			<main className={className}>
				<Header />
        <div className="flex-fill">
          <Navbar />
          <Scene>
            <Route exact path="/" component={Home} />
            <Route path="/transfer" component={Transfer} />
            <Route path="/transactions" component={TransactionHistory} />
            <Route path="/permissions" component={Permissions} />
            <Route path="/user/:id" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/faqs" component={Faqs} />
            <Route path="/users" component={Users} />
            <Route path="/preferences" component={Preferences} />
            <Route path="*" component={NoMatch} />
            <Footer />
          </Scene>
        </div>
			</main>
		)
	}
}

export default App

