import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'





export function Header () {
    return (
      <header>
        <div className='container'>
        <nav>
            <img style={{width: "18%"}} src={logo} alt= "Logo" />
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Menu</a></li>
              <li><Link to='/booking'>Reservation</Link></li>
              <li><a href='#'>Order online</a></li>
              <li><a href='#'>Login</a></li>
            </ul>
          </nav>
        </div>
      </header> 
  
        
    )
}