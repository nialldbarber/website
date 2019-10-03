import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from '~@components/nav'
import Footer from '~@components/footer'
import Home from '~@pages/home'
import About from '~@pages/about'
import Blog from '~@pages/blog'
import Contact from '~@pages/contact'
import '~@styles/main.scss'

const App: FC = () => (
	<Router>
		<Nav />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
		</Switch>
		<Footer />
	</Router>
)

export default App
