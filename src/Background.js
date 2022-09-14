import React from 'react'
import Car_file from './Car_file'
import {Routes, Route} from 'react-router-dom'

 export default function Background() {
  return (
    <div>
      <Routes>
  <Route Path ='/Car_file' element={<Car_file />}/>

</Routes>
      
       
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


