import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from '~@utils/apollo'
import Header from '~@components/header'
import Footer from '~@components/footer'
import Home from '~@pages/home'
import About from '~@pages/about'
import TechStack from '~@pages/tech-stack'
import Blog from '~@pages/blog'
import Post from '~@components/post'
import Contact from '~@pages/contact'
import '~@styles/main.scss'

const App: FC = () => (
	<ApolloProvider client={client}>
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/tech-stack" component={TechStack} />
					<Route path="/blog" component={Blog} />
					<Route path="/post/:id" component={Post} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</main>
			<Footer />
		</Router>
	</ApolloProvider>
)

export default App
