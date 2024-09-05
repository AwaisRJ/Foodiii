import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../assets/assets";
import { signInAction } from "../store/login-slice";

const SignUp = () => {
  const currState = useSelector((state) => state.signin.currState);
  const signInVisible = useSelector((state) => state.signin.signInVisible);
  const dispatch = useDispatch();
  const SignInVisibleHandler = () => {
    dispatch(signInAction.SignInToggle());
  };
  const SignInSignUpHandler = () => {
    dispatch(signInAction.ToggleCurrentState());
  };
  const SubmitHandler = (event) => {
           event.preventDefault();
           alert('login succesfully');
  }
  return (
    <div className="grid w-full h-full bg-[#00000090] z-10 absolute m-0 p-0">
      <form 
      onSubmit={SubmitHandler}
      className="place-self-center bg-white shadow-lg rounded-md p-5 animate-fadeIn">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold text-2xl">
            {currState ? "Sign Up" : "Sign In"}
          </h1>
          <img
            className="cursor-pointer size-4"
            onClick={SignInVisibleHandler}
            src={assets.cross_icon}
            alt="Exit SignIn Screen"
          />
        </div>
        <div className="flex flex-col">
          {currState && (
            <input className="border p-3 mb-2" type="text" placeholder="Enter Your Name" required />
          )}
          <input className="border p-3 mb-2" type="email" placeholder="Enter Your Email" required />
          <input className="border p-3 mb-5" type="password" placeholder="Enter Your Password" required />
        </div>
        <button className="bg-orange-500 text-white font-bold w-full p-2 rounded-md">{currState ? "Create Account" : "Login"}</button>
        <div className="flex gap-2 mt-3 mb-6">
          <input type="checkbox" />
          <p>By contributing, I agree to the terms and privacy policy.</p>
        </div>
        {currState ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-orange-500 cursor-pointer font-bold"
              onClick={SignInSignUpHandler}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              className="text-orange-500 cursor-pointer font-bold"
              onClick={SignInSignUpHandler}
            >
              Sign Up
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
