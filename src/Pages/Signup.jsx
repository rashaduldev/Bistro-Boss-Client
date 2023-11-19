import { useContext, useEffect, useRef, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
    const {createUser}=useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{ 
    console.log(data)
    const email=data.email;
    const password=data.password;
    createUser(email,password);
    console.log(createUser);

};

  const captcharef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleValidateCaptcha = () => {
    const userCapthaValue = captcharef.current.value;
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
        <title>Bistro Boss | Signup</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 mt-2">
                    Name is required !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 mt-2">
                   Email is required !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register(
                    "password",
                    { required: true,
                      minLength: 6, 
                      maxLength: 99,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                    }
                  )}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 mt-2">Please minimum enter 6 charecter</p>
                )}
                {errors.password?.type === "max" && (
                  <p className="text-red-600">Please maximum enter 20 charecter</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">Please enter at least a symbol, upper and lower case letters and a number</p>
                )}
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
                  name="captcha"
                />
                {disabled == true ? (
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-error"
                  >
                    validated
                  </button>
                ) : (
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-success"
                  >
                    Captcha mached
                  </button>
                )}
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary text-white" type="submit" value={'Sign up'} />
              </div>
            </form>
            <p className="text-center my-4">
              Already Have an Account ?{" "}
              <a className="text-red-600 underline" href="login">
                Please Login
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
