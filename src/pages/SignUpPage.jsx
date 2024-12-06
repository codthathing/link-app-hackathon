import { useState } from "react";
import PageDiv from "../components/ui/PageDiv";
import LogoText from "../components/common/LogoText";
import TopicParagraph from "../components/common/TopicParagraph";
import SignInSection from "../components/(sign-in)/SignInSection";
import SignInMain from "../components/(sign-in)/SignInMain";
import SignInInput from "../components/(sign-in)/SignInInput";
import PageButton from "../components/common/PageButton";
import SignInOption from "../components/(sign-in)/SignInOption";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({email:"", password: "", confirm_password: ""});
  const handleSignUpInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpInput({...signUpInput, [name]: value});
  };

  return (
    <PageDiv className={"sign-in-div"}>
      <div className="md:w-3/4 lg:w-2/5">
        <LogoText />
        <SignInSection>
          <TopicParagraph topic={"Create account"} text={"Let's get you started sharing your links"} />
          <SignInMain>
            <SignInInput label={"Email address"} id={"login-email-input"} type={"email"} name={"email"} value={signUpInput.email} onChange={handleSignUpInput} placeholder={"e.g.alex@gmail.com"} errorMessage={"Can't be empty"} />
            <SignInInput label={"Create password"} id={"login-password-input"} type={"password"} name={"password"} value={signUpInput.password} onChange={handleSignUpInput} placeholder={"At least 8 characters"} errorMessage={"Please check again"} />
            <SignInInput label={"Confirm password"} id={"login-confirm-password-input"} type={"password"} name={"confirm_password"} value={signUpInput.confirm_password} onChange={handleSignUpInput} placeholder={"At least 8 characters"} errorMessage={"Please check again"} />
          </SignInMain>
          <p className="text-xs md:text-base mb-3 md:mb-8 text-grey-normal">Password must contain at least 8 characters</p>
          <PageButton />
          <SignInOption mainText={"Already have an account?"} linkText={"Login"} linkTo={"/"} />
        </SignInSection>
      </div>
    </PageDiv>
  );
};

export default SignUpPage;