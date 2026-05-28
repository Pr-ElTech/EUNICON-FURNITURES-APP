// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useDispatch } from "react-redux";
// import { login } from "../Store/userSlice"; // Adjust this path to match your folder structure
// import axiosInstance from "./Config/AxiosInstance";
// import BlogBtn from "../Components/BlogBtn";
// import "../css/Login.css";

// // 1. Zod Validation Schema
// const signupSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().min(1, "Email is required").email("Invalid email address"),
//   profession: z.string().min(2, "Profession must be at least 2 characters"),
//   experience: z.string().min(1, "Experience is required"),
//   location: z.string().min(2, "Location must be at least 2 characters"),
//   password: z
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .regex(/[0-9]/, "Password must contain at least one number"),
// });

// const SignupPage = () => {
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiError, setApiError] = useState(null);
//   const [apiSuccess, setApiSuccess] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(signupSchema),
//     mode: "onBlur",
//   });

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     setApiError(null);
//     setApiSuccess(null);

//     try {
//       const response = await axiosInstance.post("/register", data);

//       if (response.status === 200 || response.status === 201) {
//         setApiSuccess("Signup successful! Your account has been created.");
//         console.log("Signup Response:", response.data);

//         // Automated Redux authentication fallback if backend signs user in immediately
//         if (response.data.token && response.data.user) {
//           dispatch(
//             login({
//               user: response.data.user,
//               token: response.data.token,
//             }),
//           );
//         }

//         reset();
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message ||
//         error.message ||
//         "Signup failed. Please try again.";
//       setApiError(errorMessage);
//       console.error("Signup Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="create_account_container">
//       <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
//         <h1>Create Account</h1>

//         {apiError && (
//           <div
//             className="error-banner"
//             style={{ color: "red", marginBottom: "10px" }}
//           >
//             {apiError}
//           </div>
//         )}
//         {apiSuccess && (
//           <div
//             className="success-banner"
//             style={{ color: "green", marginBottom: "10px" }}
//           >
//             {apiSuccess}
//           </div>
//         )}

//         <input
//           type="text"
//           placeholder="Enter your full name"
//           {...register("name")}
//         />
//         {errors.name && (
//           <span style={{ color: "red" }}>{errors.name.message}</span>
//         )}

//         <input
//           type="email"
//           placeholder="Enter your email address"
//           {...register("email")}
//         />
//         {errors.email && (
//           <span style={{ color: "red" }}>{errors.email.message}</span>
//         )}

//         <input
//           type="text"
//           placeholder="Enter your profession"
//           {...register("profession")}
//         />
//         {errors.profession && (
//           <span style={{ color: "red" }}>{errors.profession.message}</span>
//         )}

//         <input
//           type="text"
//           placeholder="e.g., 5 years"
//           {...register("experience")}
//         />
//         {errors.experience && (
//           <span style={{ color: "red" }}>{errors.experience.message}</span>
//         )}

//         <input
//           type="text"
//           placeholder="Enter your location"
//           {...register("location")}
//         />
//         {errors.location && (
//           <span style={{ color: "red" }}>{errors.location.message}</span>
//         )}

//         <input
//           type="password"
//           placeholder="Create a strong password"
//           {...register("password")}
//         />
//         {errors.password && (
//           <span style={{ color: "red" }}>{errors.password.message}</span>
//         )}

//         <BlogBtn
//           type="submit"
//           className="button"
//           text={isLoading ? "Creating..." : "Create"}
//           disabled={isLoading}
//         />
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "../Store/userSlice";
import axiosInstance from "./Config/AxiosInstance";
import BlogBtn from "../Components/BlogBtn";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignupPage = () => {
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
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null);
    setApiSuccess(null);

    try {
      // Consuming registration API route inline here
      const response = await axiosInstance.post("/register", data);

      if (response.status === 200 || response.status === 201) {
        setApiSuccess("Signup successful! Your account has been created.");

        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
        }

        const userData = response.data.existingUser || response.data.user;
        if (userData) {
          dispatch(login({ user: userData, token: response.data.token }));
        }

        reset();
        setTimeout(() => navigate("/home"), 1500);
      }
    } catch (error) {
      setApiError(error.response?.data?.message || "Signup failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create_account_container">
      <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
        {apiError && <div style={{ color: "red" }}>{apiError}</div>}
        {apiSuccess && <div style={{ color: "green" }}>{apiSuccess}</div>}

        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}

        <input type="text" placeholder="Last Name" {...register("lastName")} />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <span style={{ color: "red" }}>{errors.phoneNumber.message}</span>
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
          text={isLoading ? "Creating..." : "Create"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default SignupPage;
