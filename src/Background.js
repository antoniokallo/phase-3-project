import React from 'react'
import Car_file from './Car_file'
import {Routes, Route} from 'react-router-dom'

 export default function Background() {
  return (
    <div>
      <Routes>
  <Route Path ='/Car_file' element={<Car_file />}/>

</Routes>
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:3000/">
              <img src=" https://i.postimg.cc/cHkvydkT/Gay-Pride-Flag-svg.webp" width="112" height="28"/>
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
       
        <div>
        <section class="section" style={{display: '$menu-list-border-left'}}>
  <h1 class="menu-label">
    General
  </h1>
  <ul class="menu-list">
  <select>
        <option value="option-1">Engine</option>
        <option value="option-2">Rims</option>
        <option value="option-3">Wheels</option>
        <option value="option-4">Spoiler</option>
    </select>
  

  </ul>
</section>

        </div>
  
      </div>
    
  )
}


