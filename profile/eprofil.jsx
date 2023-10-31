import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import usEr from '/image/user.png';
import React from 'react';
import Chat from '/image/chat.png';
import Shoppin from '/image/shopping-cart.png';








function Maccount(){

    const headerStyle = {
        backgroundColor: '#f98029',
        color: '#fff',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height : '100px'
      };

      const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',

  
       
      };
    
      const userActionsStyle = {
        display: 'flex',
        alignItems: 'center',
        
      
      };
 
    return(

      <div>
<header style={headerStyle}>
  <div style={{marginLeft: '190px'}}>
      <div style={{fontSize: '40px',fontFamily: 'Impact'}}>SAFICC</div>
      </div>
      <div style={searchBarStyle}>
        <input style={{width: '680px',height: '35px',borderRadius: '50px', marginLeft: '70px'  ,border: 'none'}}type="text" placeholder="Search..."  />
        <button style={{ marginLeft: '-70px', 
                         backgroundColor: '#f98029', 
                         color: '#fff', 
                         border: 'none', 
                         borderRadius: '40px', 
                         cursor: 'pointer',
                         height: '20px',
                         fontSize: '15px',
                         display: 'flex',
                         alignItems:'center',
                         justifyContent:'center',
                         fontFamily: 'Garamond' }}>
    Search
  </button>
      </div>
      <div style={userActionsStyle}>
      <img src={usEr} alt="user" style={{ width: '40px', height: '40px', marginRight:'20px', }}/>
        <a href="#" style={{marginRight: '20px',fontFamily: 'Garamond'}}>Login</a>
        <a href="#" style={{marginRght: '20px',fontFamily: 'Garamond'}}>Sign Up</a>
        <div style={{marginLeft: '20px'}}></div>
        <img src={Shoppin} alt="user" style={{ width: '25px', height: '25px', marginRight: '200px', }}/>
      </div>  
 </header>



 
  

  <div>
        


   <h3 style={{position: 'absolute', left: '230px',top: '130px',fontFamily: 'Garamond'}}>Edit Profile</h3>
   <h3 style={{position: 'absolute', left: '230px',top: '180px',fontFamily: 'Garamond'}}>Full Name</h3>
   <input style={{position: 'absolute', 
                  left: '230px',top: '220px',
                  background: 'rgb(245, 242, 242)',
                  borderRadius: '50px',
                  border: 'none',
                  width: '250px'}}></input>

   <h3 style={{position: 'absolute', left: '230px',top: '180px',fontFamily: 'Garamond'}}>Full Name</h3>
   <h3 style={{position: 'absolute', left: '600px',top: '180px',fontFamily: 'Garamond'}}>Email Addres |</h3>
   <button style={{position: 'absolute', 
                   left: '770px',
                   top: '180px',
                   fontFamily: 'Garamond',
                   color: 'blue', 
                   border: 'none',
                   backgroundColor: 'white', 
                   fontSize: '20px'}}>Change</button>

   <h3 style={{position: 'absolute', left: '600px',top: '220px',fontFamily: 'Garamond',fontSize: '20px'}}>laksa@gmail.com</h3>
   <h3 style={{position: 'absolute', left: '1100px',top: '180px',fontFamily: 'Garamond'}}>Mobile |</h3>
   <button style={{position: 'absolute', 
                   left: '1200px',
                   top: '180px',
                   fontFamily: 'Garamond',
                   color: 'blue',
                   border: 'none',
                   backgroundColor: 'white', 
                   fontSize: '20px'}}>Add</button>
   <h3 style={{position: 'absolute', left: '1100px',top: '220px',fontFamily: 'Garamond',fontSize: '20px'}}>Please Enter Your Phone Number</h3>
   <button style={{position: 'absolute', 
                   left: '1100px',
                   top: '400px',
                   fontFamily: 'Garamond', 
                   width: '150px',
                   border: 'none', 
                   borderRadius: '40px',
                   backgroundColor: '#f98029',
                   color: 'white'}}>Change Password</button>

   <button style={{position: 'absolute', 
                   left: '1100px',
                   top: '450px',
                   fontFamily: 'Garamond', 
                   width: '150px',
                   border: 'none', 
                   borderRadius: '40px',
                   backgroundColor: '#f98029',
                   color: 'white'}}>Save Change</button>
      </div>


<div style={{}}>
   <hr className="middle-line" style={{color: '#f98029', marginTop: '480px',height: '5px',width: '100%', position: 'absolute' }}/>
   <img src={Chat} style={{marginTop: '500px',position: 'absolute', marginLeft: '270px', width: '20px',height: '20px',  }} />
        <h1  style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '300px',fontFamily: 'Garamond'}}> chat withUs</h1> 
        <h1 style={{color: '#f98029',marginTop: '500px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> About us</h1>
        <h1 style={{color: '#f98029',marginTop: '520px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Terms & Condition</h1>
        <h1 style={{color: '#f98029',marginTop: '540px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Privacy police</h1>
        <h1 style={{color: '#f98029',marginTop: '560px',position: 'absolute',fontSize: '15px', marginLeft: '1200px',fontFamily: 'Garamond'}}> Contact us</h1>
        
        
        </div>

    </div>

 
          
    











       
         
      
      
    










    )
}

export default Maccount;