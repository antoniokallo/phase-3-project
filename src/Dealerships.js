import React from 'react'

export default function Dealerships() {
  return (
    <div>
          <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:3000/">
              <img src=" https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" width="112" height="28"/>
            </a>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>
        
              <a class="navbar-item" href='https://www.streamscheme.com/wp-content/uploads/2022/02/sadge-600.png'>
                Documentation
              </a>
        
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                 Car body
                </a>
        
                <div class="navbar-dropdown">
                  <a class="navbar-item" href='' >
                    toyota
                  </a>
                </div>
              </div>
            </div>
        
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary, button is-black">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
