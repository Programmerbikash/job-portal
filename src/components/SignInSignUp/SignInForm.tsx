// components/ContactForm.tsx
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from '../../styles/signInForm.module.css'

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
      className="bg-white p-[50px] my-16 max-w-[600px] rounded-md"
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
    </form>
  );
};

export default SignInForm;
