import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from '../../styles/signInForm.module.css'
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

interface IFormInput {
  emailAddress: string;
  password: string;
  age: number;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  // console.log(watch("example"));

  return (
    <form
      style={{ boxShadow: "0px 0px 15px #d9dbdd" }}
      className="bg-white p-[50px] my-16 max-w-[600px] rounded-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h1 className="text-4xl text-center font-bold">Sign in</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold">Continue with email</h1>
      </div>
      <div className={`${styles.inputField} my-[15px]`}>
        <input
          type="email"
          className={`${styles.input}`}
          {...register("emailAddress")}
          required
        />
        <label>Email Address</label>
        {/* {errors.what && <span>What is required</span>} */}
      </div>
      <div className={`${styles.inputField} my-[15px]`}>
        <input
          type="password"
          className={`${styles.input}`}
          {...register("password")}
          required
        />
        <label>Password</label>
        {/* {errors.what && <span>What is required</span>} */}
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-[#cf04a9] rounded hover:bg-[#9F0885] w-full h-12"
      >
        Continue
      </button>
      <div className="flex flex-row justify-center items-center my-[25px]">
        <hr className="border-1 border-[#DEDEDE] w-full" />
        <div className="mx-2 text-base font-bold">or</div>
        <hr className="border-1 border-[#DEDEDE] w-full" />
      </div>
      <div className={`${styles.bottomInputField} my-[15px]`}>
        <button
          type="submit"
          className="px-4 py-2 text-white text-base font-bold rounded w-full h-12 flex items-center justify-center"
        >
          <FcGoogle className="text-3xl mr-1" />
          Continue with Google
        </button>
      </div>
      <div className={`${styles.bottomInputField} my-[15px]`}>
        <button
          type="submit"
          className="px-4 py-2 text-white text-base font-bold rounded w-full h-12 flex items-center justify-center"
        >
          <AiFillApple className="text-3xl mr-1" />
          Continue with Apple
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
