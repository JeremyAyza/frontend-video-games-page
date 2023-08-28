import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Page404.css'

function Page404() {
  return (
    <>
    
    <div className='page404'>
        <Link to="/home">
            <button className="btn bg-success mt-4" type="submit">🏠 Volver a Home</button>
        </Link>
        <div class="text">
        <div>ERROR</div>
        <h1>404</h1>
        <hr/>
        <div>Page Not Found</div>
        </div>
        <div class="astronaut">
        <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src"/>
        </div>
    </div>
    
    </>
  )
}

export default Page404