
import React from 'react'
import { Button } from '../Buttons/Button'
import { MenuItems } from "./MenuItems"
import { logo } from "./images"

import './navbar.css'

class NavBar extends React.Component {
  state = { clicked: false }

   handleClick = () => {
     this.setState({ clicked: !this.state.clicked })
   }

  render() {
    return (
      <nav className="NavbarItems">      
        <h1 className="navbar-logo"><img src={logo.img} alt={logo.alt}/></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default NavBar