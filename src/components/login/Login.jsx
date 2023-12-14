import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="loginPageContainer">
            <div className='formContainer'>
                <form className='Form' onSubmit={()=>navigate('/movieBooking')}>
                    <p>Username</p>
                    <input className='formInput' placeholder='Username' />
                    <p>Password</p>
                    <input
                        className='formInput'
                        placeholder='Password'
                        type='password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
                    />
                    <br></br>
                    <input className='loginInput' type='submit' value="Login" ></input>
                </form>
            </div>
        </div>
    )
}
export default Login;
