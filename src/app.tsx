import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppProvider } from '~@context/index.js'
import Header from '~@components/header'
import Footer from '~@components/footer'
import Home from '~@pages/home'
import About from '~@pages/about'
import Blog from '~@pages/blog'
import Contact from '~@pages/contact'
import '~@styles/main.scss'

const App: FC = () => {
	const headerState = {
		navOpen: false
	}

	return (
		<AppProvider value={headerState}>
			<Router>
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/blog" component={Blog} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</AppProvider>
	)
}

export default App
