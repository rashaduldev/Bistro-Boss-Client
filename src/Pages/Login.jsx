import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captcharef=useRef(null);
    const [disabled,setDisabled]=useState(true);

    const handleLogin=(e)=>{
        
        e.preventDefault(); 
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const captcha=form.captcha.value;
        console.log(captcha,password,email);

    }
    const handleValidateCaptcha=()=>{
        const  userCapthaValue=captcharef.current.value;
        console.log(userCapthaValue);
        if (validateCaptcha(userCapthaValue)==true) {
            setDisabled(false)
            // alert('Captcha Matched');
           
        }
   
        else {
            // alert('Captcha Does Not Match');
            setDisabled(true)
        }
    }

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
              <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captcharef}
                  placeholder="Type captcha"
                  className="input input-bordered my-5"
                  required
                  name='captcha'
                />
                {disabled==true?<button onClick={handleValidateCaptcha} className="btn btn-outline btn-error">validated</button>
               : <button  onClick={handleValidateCaptcha} className="btn btn-outline btn-success">Captcha mached</button>}
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
