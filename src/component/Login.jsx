import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div>
      <h1 className="text-center py-10 title">Login</h1>
      <div className="flex items-center justify-center min-h-[calc(100vh-500px)]">
        <form
          className="w-3/4 mx-auto  space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
          
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>

          <div className="form-control mt-6">
            <button className="submit-btn" type="submit">
              Login
            </button>
          </div>
          <p className="text-primary text-lg text-center">
            <small>
              New here?
              <Link to="/signUp">Create a new Account</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
