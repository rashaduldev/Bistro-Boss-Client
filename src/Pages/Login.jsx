import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const Navigate=useNavigate();
  const Location=useLocation();

  const from=Location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(captcha, password, email);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        let timerInterval;
        Swal.fire({
          title: "Login Successfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        Navigate(from,{replace:true});
      })
      .catch((err) => {
        console.log('email or password not match');
        console.log(err.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    const userCapthaValue = e.target.value;
    console.log(userCapthaValue);
    if (validateCaptcha(userCapthaValue) == true) {
      setDisabled(false);
      // alert('Captcha Matched');
    } else {
      // alert('Captcha Does Not Match');
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
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
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
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
                  placeholder="Type captcha"
                  className="input input-bordered my-5"
                  required
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                />       
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center my-4">
              New hare ?{" "}
              <a className="text-red-600 underline" href="signup">
                Please signup
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
