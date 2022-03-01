import { GoogleLogin } from 'react-google-login';
import './login.css'
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'


function Login() {

    const googleResponse = (response) => {
        console.log(response);

    }
    const CssTextField = styled(TextField)({
        '&': {
            margin: '15px 0 5px 0',
        },
        '& input': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
                color: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });


    return (
        <div className="login-container">
            <div className='background-login'>
                <div className='container'>
                    <p className='title-login'>Tugo</p>
                    <div className='input-info'>
                        <CssTextField label="Username" id="custom-css-outlined-input" required/>
                        <CssTextField label="Password" id="custom-css-outlined-input" type="password" required />
                        <a href=''>Forgot password?</a>
                        <button>Login</button>
                        <p>
                            <span>Don't have a account </span>
                            <a href="">Register now.</a>
                        </p>
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
                                <img src={require('../../assets/google_logo.png')} alt="google" />
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