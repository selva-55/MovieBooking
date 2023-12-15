import { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [inputValues, setInputValue] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = () => {
        if(inputValues.username !== '' && inputValues.password !== ''){
            navigate('/movieBooking')
        }
        else{
            alert("Please fill all fields")
        }
    }
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }
    console.log(inputValues)
    return (
        <div className="loginPageContainer">
            <div className='formContainer'>
                <form className='Form' onSubmit={() => handleSubmit()}>
                    <p>Username</p>
                    <input onChange={(e) => handleOnchange(e)} name="username" className='formInput' placeholder='Username' />
                    <p>Password</p>
                    <input
                        onChange={(e) => handleOnchange(e)}
                        name="password"
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
