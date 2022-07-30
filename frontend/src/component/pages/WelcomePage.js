import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  console.log(useLocation());
  useEffect(() => {
    const interval = setTimeout(() => {
      navigate("register");
    }, 5000);
    return () => clearTimeout(interval);
  }, [navigate]);
  return (
    <div className="home">
      <h1>4go</h1>
    </div>
  );
};

export default WelcomePage;
