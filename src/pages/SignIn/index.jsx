import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {StyledSignInSection} from "./signin.styled";
import SigninForm from "./SigninForm";

const SignIn = () => {
  const navigate = useNavigate();
  const {userInfo} = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <StyledSignInSection
        className="signin-section"
        style={{
          backgroundSize: "cover",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <SigninForm />
        <p className="mt-3 text-center" style={{color: "white", zIndex: "100", fontSize: "18px"}}>
          Use demo credentials: 
          <br /><br/>
          username : <b>kminchelle</b> <br/> password : <b>0lelplR</b>
        </p>
      </StyledSignInSection>
    </>
  );
};

export default SignIn;
