import { GoogleLogin } from 'react-google-login';
// import logo from './logo.svg';
import './App.css';

function App() {

    const googleResponse = (response) => {
        console.log(response);

    }


    return (
        <div>
            <h1>hieu</h1>
            <GoogleLogin className='editlogingg'
                clientId={global.config.KEY}
                onSuccess={googleResponse}
                cookiePolicy={'single_host_origin'}
                buttonText="Login with google"
            ></GoogleLogin>
        </div>
    );
}

export default App;
