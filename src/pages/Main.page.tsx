import React, {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import {Champions, Champion, About} from './Index.page'


const Main:FunctionComponent = () => {

    return (
        <div className=''>
          <Routes>
            <Route path='/' element={<Champions />}/>
            <Route path='/about' element={<About />}/>
            
            <Route path='/champions/:id' element={<Champion />}/>
          </Routes>
        </div>
    )
}

export default Main;