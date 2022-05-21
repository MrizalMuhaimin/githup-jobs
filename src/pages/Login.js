import './Login.css'
import { GoogleLogin } from 'react-google-login';
// import { useState } from 'react';



const clientId = '975407112440-t862v7ua2pg7mff90ih7a4nhthoj7jbu.apps.googleusercontent.com'




function Login(){
    
      const handleFailure = (result) => {
        alert(result);
        console.log(result)
      };

      const handleLogin = (googleData) => {
          console.log(googleData)
      }

    return (
        <header className="Login-header">
            <h1>Github Jobs Login App</h1>
            <div>
          
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                ></GoogleLogin>

            </div>
        </header>
       
    )
}

export default Login;