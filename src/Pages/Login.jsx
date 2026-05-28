import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "../Store/userSlice.js";
import axiosInstance from "./Config/AxiosInstance";
import BlogBtn from "../Components/BlogBtn";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);
    setApiSuccess(null);

    try {
      // Consuming login API route inline here
      const response = await axiosInstance.post("/login", data);

      if (response.status === 200 || response.status === 201) {
        setApiSuccess("Login successful!");

        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }

        const userData = response.data.existingUser;
        if (userData) {
          dispatch(login({ user: userData, token: response.data.token }));
        }

        reset();
        setTimeout(() => navigate("/home"), 1500);
      }
    } catch (error) {
      setApiError(error.response?.data?.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create_account_container">
      <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Account</h1>
        {apiError && <div style={{ color: "red" }}>{apiError}</div>}
        {apiSuccess && <div style={{ color: "green" }}>{apiSuccess}</div>}

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}

        <BlogBtn
          type="submit"
          text={isLoading ? "Logging in..." : "Login"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Login;
