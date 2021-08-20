import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {showErrorMsg,showSuccessMsg} from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './signup.css';
import { signUp } from '../../api/auth/auth';

 const  SignUp = () => {
    const [formData,setformData] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
        successMsg:false,
        errorMsg:false,
        loading:false,
    })

    const handleChange =  (evt) => {
        setformData({
            ...formData,
            [evt.target.name] : evt.target.value,
        })
    }

    const handelSubmit = (evt) =>{
        evt.preventDefault();
        if(isEmpty(username) || isEmpty(email)|| isEmpty(password)||isEmpty(password2)){
            setformData({
                ...formData,errorMsg:'All fields are required'
            })
        } else if(!isEmail(email)){
            setformData({
                ...formData,errorMsg:'Invalid Email'
            })
        } else if(!equals(password,password2)){
            setformData({
                ...formData,errorMsg:'Password does not match'
            })
        } else {
            const { username, email,password} = formData;
            const data = { username, email,password} ;
            setformData({
                ...formData,loading:true
            })

            signUp(data)
            .then(response =>{
                console.log(response)
                setformData({
                    username:'',
                    email:'',
                    password:'',
                    password2:'',
                    errorMsg:false,
                    loading:false,
                    successMsg:response.data.successMessage
                })
            })
            .catch((err) =>{
                console.log( 'Axios signup error',err )
                setformData({
                    ...formData,loading:false
                })
            })
        }
    }

    const { username, email,password,password2,successMsg,errorMsg,loading} = formData;
    const SignUpForm = () => {
       return  <form className='sign-form' onSubmit={handelSubmit} noValidate>
              <div className="form-group input-group">
                  
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-user"></i>
                    </span>
                </div>
                <input type="text" className="form-control" name="username" value={username} placeholder="Username" autoFocus  onChange={handleChange}   />
            </div>
            <div className="form-group input-group">
                 <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>
                <input type="email" className="form-control" name='email' value={email}  placeholder="Email address" aria-describedby="emailHelp" onChange={handleChange} />
            </div>
            <div className="form-group input-group">
                 <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>
                </div>
                <input type="password" className="form-control" name="password"  value={password} placeholder="Create Password" onChange={handleChange} />
            </div>
            <div className="form-group input-group">
                 <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-key"></i>
                    </span>
                </div>
                <input type="password" className="form-control" name="password2" value={password2} placeholder="Create Password" onChange={handleChange} />
            </div>
            <div className="form-group input-group ">
            <button type="submit" className="btn btn-primary sign-btn">Sign Up</button>
            </div>
            <div className="form-group input-group ">
            <Link to="/sign-in" className="btn btn-info login-btn">Log In</Link>
            </div>

        </form>
    };


    return (<div className="signup-container ">
        <div className='container'>
                <div className='row  justify-content-center sign-up-form '>
                     
                    <div className='col-md-5  '>
                    {loading && showLoading()}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {successMsg && showSuccessMsg(successMsg)}
                   

                     { SignUpForm() }
                    
                     </div>
                    {JSON.stringify(formData)}
              </div>
            </div>
        </div> );
}


export default SignUp;