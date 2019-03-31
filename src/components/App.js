import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import {Footer} from './Footer'
import {About} from './About'
import {NavBar} from './NavBar'
import {Books} from './Books'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: { open: false }
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      menu: { open: !state.menu.open }
    }))
  }

  render() {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />
        <NavBar toggleMenu={e => this.toggleMenu(e)}/>
        <Header title="ReactJS Academy" />
        <Books />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App
