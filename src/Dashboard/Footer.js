import './Nav.css'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer=()=>{
    return(
        <div className='foot'>

            <div className='foot2'>
                <Link to="/"className="f2">Home</Link>
                <h1 to="/login" className='f2'>contact us</h1>
                <div className="ft3">
                    
                <h4 className='f3'>Maid Id : xxxx@gmail.com</h4>
                <h4 className='f3'>Contact Number : +91 xxxxx555xx</h4>
                </div>
                <h1 to="" className="f2">Culture</h1>
            </div>
            <div>
                <img className='img2' src="scooter.png" alt="" />
            </div>
        </div>
    )

}
export default Footer;