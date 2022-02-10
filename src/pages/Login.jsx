import { GoogleLogin } from 'react-google-login';

function Login(){
    
    const googleResponse = (response) => {
        console.log(response);

    }

    return(
        <>
          <GoogleLogin className='editlogingg'
                clientId={global.config.KEY}
                onSuccess={googleResponse}
                cookiePolicy={'single_host_origin'}
                buttonText="Login with google"
            ></GoogleLogin>
        </>
    )
}
export default Login;