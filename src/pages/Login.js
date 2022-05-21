import './Login.css'
import {useState, useEffect} from "react"
import {useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



const clientId = '975407112440-t862v7ua2pg7mff90ih7a4nhthoj7jbu.apps.googleusercontent.com'




function Login(){
    let navigation = useNavigate();

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
      );
    
    const handleFailure = (result) => {
        alert(result);
      };

    const handleLogin = (googleData) => {
          setLoginData(googleData);
          localStorage.setItem('loginData', JSON.stringify(googleData));
      }

    useEffect(() => {
        if(loginData !== null){
            navigation("/home")
        }
    }, []);

    

    

    return (
        
        <header className="Login-header">
            <h1>Github Jobs Login App</h1>
            <div>
          
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        handleLogin(credentialResponse)
                    }}
                    onError={() => {
                        handleFailure('Login Failed')
                    }}/>
            </GoogleOAuthProvider>

            </div>
        </header>
       
    )
}

export default Login;