import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../css/Login.css";
import BlogBtn from "../Components/BlogBtn";
import axiosInstance from "./Config/AxiosInstance";

// Zod Schema for form validation
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  profession: z.string().min(2, "Profession must be at least 2 characters"),
  experience: z.string().min(1, "Experience is required"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);
    setApiSuccess(null);

    try {
      const response = await axiosInstance.post("/registerArtisan", data);

      if (response.status === 200 || response.status === 201) {
        setApiSuccess("Signup successful! Your account has been created.");
        console.log("Signup Response:", response.data);
        reset();

        // Store token if the server sends one
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Signup failed. Please try again.";
      setApiError(errorMessage);
      console.error("Signup Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create_account_container">
      <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>

        {apiError && (
          <div style={{ color: "red", marginBottom: "10px" }}>{apiError}</div>
        )}
        {apiSuccess && (
          <div style={{ color: "green", marginBottom: "10px" }}>
            {apiSuccess}
          </div>
        )}

        <input
          type="text"
          placeholder="Enter your full name"
          {...register("name")}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}

        <input
          type="text"
          placeholder="Enter your profession"
          {...register("profession")}
        />
        {errors.profession && (
          <span style={{ color: "red" }}>{errors.profession.message}</span>
        )}

        <input
          type="text"
          placeholder="e.g., 5 years"
          {...register("experience")}
        />
        {errors.experience && (
          <span style={{ color: "red" }}>{errors.experience.message}</span>
        )}

        <input
          type="text"
          placeholder="Enter your location"
          {...register("location")}
        />
        {errors.location && (
          <span style={{ color: "red" }}>{errors.location.message}</span>
        )}

        <input
          type="password"
          placeholder="Create a strong password"
          {...register("password")}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}

        <BlogBtn
          className="button"
          text={isLoading ? "Creating..." : "Create"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default SignupPage;
