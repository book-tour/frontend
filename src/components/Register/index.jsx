import { GoogleLogin } from 'react-google-login';
import CustomTextField from '../elementComponent/CustomTextField'
import { Link } from 'react-router-dom'
import '../login/login.css'


const Register = () => {

    const googleResponse = (response) => {
        console.log(response);

    }


    return (
        <div className="login-container">
            <div className='background-login'>
                <div className='container-login'>
                    <p className='title-login'>Tugo</p>
                    <div className='input-info-login'>
                        <CustomTextField label="Email" id="custom-css-outlined-input" required />
                        <CustomTextField label="Username" id="custom-css-outlined-input" required />
                        <CustomTextField label="New Password" id="custom-css-outlined-input" type="password" required />
                        <CustomTextField label="Confirm Password" id="custom-css-outlined-input" type="password" required />
                        <br />
                        <button>Register</button>
                        <p>
                            <span>Adlready have a account </span>
                            <Link to="/login">Login here.</Link>
                        </p>
                        <br />
                    </div>
                    <hr />
                    <p>Or</p>
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

export default Register;