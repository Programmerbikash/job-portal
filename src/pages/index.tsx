import BannerForm from "@/components/Home/Banner/BannerForm";
import Navbar from "@/components/Home/Navbar/Navbar";
import RegisterForm from "@/components/SignInSignUp/RegisterForm";
import SignInForm from "@/components/SignInSignUp/SignInForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#ff00cd] via-[#e2a6c9] to-[#ff00cd] py-10">
        <div className="text-8xl font-semibold text-center pb-12 text-white">
          Love
          <br />
          Mondays
          <br />
          {`Find a job you'll love`}
        </div>
        <BannerForm />
        <SignInForm />
        <RegisterForm />
        <h1 className="text-white font-bold text-2xl text-center">Search 196,588 new jobs - 878 added in the last 24 hours</h1>
      </div>
    </div>
  );
}
