import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Login, ContactForm} from './pages'
import './assets/scss/styles.scss'
import { Contact } from './components';

const routes = [
  {
    exact:true,
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/contact',
    component: ContactForm
  }
]

const AppRouter = () => (
  <Switch>
    {
      routes.map(route => (
        <Route key={route} {...route} />
      ))
    }
  </Switch>
)

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App;
