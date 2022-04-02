import { GoogleLogin } from 'react-google-login';
import CustomTextField from '../elementComponent/CustomTextField'
import { Link } from 'react-router-dom'


import './login.css'

function Login() {

    const googleResponse = (response) => {
        console.log(response);

    }

    return (
        <div className="login-container">
            <div className='background-login'>
                <div className='container-login'>
                    <p className='title-login'>Tugo</p>
                    <div className='input-info-login'>
                        <CustomTextField label="Username" id="custom-css-outlined-input" required />
                        <CustomTextField label="Password" id="custom-css-outlined-input" type="password" required />
                        <Link to="/">Forgot password?</Link>
                        <button>Login</button>
                        <p>
                            <span>Don't have a account </span>
                            <Link to="/register">Register now.</Link>
                        </p>
                    </div>
                    <hr />
                    <br />
                    <p>Or</p>
                    <br />
                    <GoogleLogin
                        clientId={global.config.KEY}
                        onSuccess={googleResponse}
                        cookiePolicy={'single_host_origin'}
                        buttonText="Login with google"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='google-login'>
                                <img src={require('../../assets/img/google_logo.png')} alt="google" />
                                <span>Login with google</span>
                            </button>
                        )}
                    ></GoogleLogin>
                </div>
            </div>
        </div>
    )
}
export default Login;