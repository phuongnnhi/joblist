import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

function LoginModalManager({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    onClose();
    navigate("/"); // Redirect to home after login
    alert("Login successful!");
  };

  return (
    <LoginModal
      open={isOpen}
      onClose={onClose}
      onSuccess={handleLoginSuccess}
    />
  );
}

export default LoginModalManager;