// import React, { useEffect } from 'react'
// import './Nav.css'
// import {Link, useNavigate} from 'react-router-dom'
// const Nav = () => {
//   const navigate=useNavigate();

//   const auth=localStorage.getItem('user');
//   const auth1=localStorage.getItem('login')
//   const logout=()=>{
//     console.log("apple");
//     //localStorage.clear();
//     navigate('/signup')
    
//   }

//   return (
//     <div className='link1'>
//       {auth?
//         <ul className='link2'>
//             <li><Link to='/'>Home</Link></li>
             
//             <li><Link to="/p">Products</Link></li>
//             <li><Link to="/add">Add product</Link></li>
//             <li><Link to="/update">Update product</Link></li>
      
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/signup" onClick={logout}>Logout  ({JSON.parse(auth).name})</Link></li>
         
        
//         </ul>:
//         <ul className='link2'>
//           <li><Link to ="/signup">Sign up</Link></li>
//           <li><Link to="/login">Login</Link></li>

//         </ul>
// }
//     </div>
//   )
// }

// export default Nav;

