import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import Search from './pages/Search'
import Map from './pages/Map'
import Update from './pages/Update'
import MuralDetails from './pages/MuralDetails'
import AddMural from './pages/AddMural'
import NotFound from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/counter" component={HelloWorld} /> */}
          <Route exact path="/search" component={Search} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/add" component={AddMural} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/muralDetails" component={MuralDetails} />
          <Route exact path="/murals/:muralId" component={MuralDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
