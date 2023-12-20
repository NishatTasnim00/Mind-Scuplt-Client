import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saveUser } from "../auth/users.jsx";
import { AuthContext } from "../provider/AuthProvider.jsx";

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .test(
      "length",
      "Password must be at least 6 characters long",
      (value) => value.length >= 6
    )
    // .test(
    //     "uppercase",
    //     "Password must contain at least one uppercase letter",
    //     (value) => /[A-Z]/.test(value)
    //   )
    //   .test(
    //     "specialChar",
    //     "Password must contain at least one special character",
    //     (value) => /[!@#$%^&*]/.test(value)
    //   )
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must need to match")
      .required("Confirm Password is required"),
});

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const loggedInUser = res.user;
        console.log(loggedInUser);
        updateUserProfile(data.name, data.photoUrl)
          .then((res) => {
            saveUser(loggedInUser);
            // console.log(loggedInUser)
            toast.success("Profile Updated Successfully");
            reset();
						// logOut();
						navigate('/');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const text = error.code.split("/");
        const text1 = text[1].split("-").join(" ");
        const err = text1.charAt(0).toUpperCase() + text1.slice(1) + ".";
        toast.error(err);
      });
  };
  return (
    <div>
        <h1 className="text-center py-10 title">Create Account</h1>
      <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
      <form className="w-3/4 mx-auto  space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="name"
              className="w-full"
            />
            {errors.Name?.type === "required" && (
              <p className="text-base-100">Name is required</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              // ToDO:required: true

              {...register("photoUrl", { required: false })}
              aria-invalid={errors.photoUrl ? "true" : "false"}
              placeholder="photo Url"
              className="w-full"
            />
            {errors.photoUrl?.type === "required" && (
              <p className="text-base-100">Photo Url is required</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="email"
              className="w-full"
            />
            {errors.email && <p className="text-base-100">Email is required</p>}
          </div>
          <div>
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
            {errors.password && (
              <p className="text-error text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-base-100 ">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="form-control mt-6 flex justify-center">
            <button className="submit-btn" type="submit">
              Sign Up
            </button>
          </div>
          <p className="text-center text-primary text-lg">
            <small>
              Already have an account?<Link to="/login">LogIn</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup;