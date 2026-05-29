// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useDispatch } from "react-redux";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { login } from "../Store/userSlice.js";
// import axiosInstance from "./Config/AxiosInstance";
// import BlogBtn from "../Components/BlogBtn";
// import "../css/Login.css";

// const loginSchema = z.object({
//   email: z.string().min(1, "Email is required").email("Invalid email address"),
//   password: z.string().min(1, "Password is required"),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isLoading, setIsLoading] = useState(false);
//   const [apiError, setApiError] = useState(null);
//   const [apiSuccess, setApiSuccess] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     mode: "onBlur",
//   });

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     setApiError(null);
//     setApiSuccess(null);

//     try {
//       const response = await axiosInstance.post("/login", data);

//       if (response.status === 200 || response.status === 201) {
//         setApiSuccess("Login successful! Redirecting...");

//         const token = response.data.token;
//         const user = response.data.user;

//         // ========================================================
//         // 🚨 DIAGNOSTIC CONSOLE LOGS BEFORE REDUX HYDRATION
//         // ========================================================
//         console.log("=========================================");
//         console.log("📡 FULL RAW BACKEND RESPONSE:", response.data);
//         console.log("👤 WHAT WE ARE EXTRACTING AS 'user':", user);
//         console.log("🔑 WHAT WE ARE EXTRACTING AS 'token':", token);
//         console.log("=========================================");

//         // 1. Commit token to localStorage for the PrivateRoute client guard
//         localStorage.setItem("authToken", token);

//         // 2. Hydrate global Redux state
//         dispatch(login({ user, token }));

//         reset();

//         // 3. Redirect back to original route or default to home page
//         const redirectPath = location.state?.from?.pathname || "/home";
//         setTimeout(() => {
//           navigate(redirectPath, { replace: true });
//         }, 1000);
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message ||
//         error.message ||
//         "Login failed. Please check your credentials.";
//       setApiError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="create_account_container">
//       <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
//         <h1>Login Account</h1>

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

//         <input type="email" placeholder="Email" {...register("email")} />
//         {errors.email && (
//           <span
//             style={{ color: "red", display: "block", marginBottom: "10px" }}
//           >
//             {errors.email.message}
//           </span>
//         )}

//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password")}
//         />
//         {errors.password && (
//           <span
//             style={{ color: "red", display: "block", marginBottom: "10px" }}
//           >
//             {errors.password.message}
//           </span>
//         )}

//         <BlogBtn
//           type="submit"
//           className="button"
//           text={isLoading ? "Logging in..." : "Login"}
//           disabled={isLoading}
//         />

//         <div className="form-footer-links">
//           <Link to="/register" className="form-link">
//             Don't have an account? Signup
//           </Link>
//           <Link to="/home" className="form-link back-home">
//             Back to Home
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../Store/userSlice.js";
import axiosInstance from "./Config/AxiosInstance";
import BlogBtn from "../Components/BlogBtn";
import "../css/Login.css";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
      const response = await axiosInstance.post("/login", data);

      if (response.status === 200 || response.status === 201) {
        setApiSuccess("Login successful! Redirecting...");

        const token = response.data.token;
        const user = response.data.existingUser;

        localStorage.setItem("authToken", token);

        dispatch(login({ user, token }));

        reset();

        const redirectPath = location.state?.from?.pathname || "/home";
        setTimeout(() => {
          navigate(redirectPath, { replace: true });
        }, 1000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please check your credentials.";
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create_account_container">
      <form className="account_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Account</h1>

        {apiError && (
          <div
            className="error-banner"
            style={{ color: "red", marginBottom: "10px" }}
          >
            {apiError}
          </div>
        )}
        {apiSuccess && (
          <div
            className="success-banner"
            style={{ color: "green", marginBottom: "10px" }}
          >
            {apiSuccess}
          </div>
        )}

        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span
            style={{ color: "red", display: "block", marginBottom: "10px" }}
          >
            {errors.email.message}
          </span>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <span
            style={{ color: "red", display: "block", marginBottom: "10px" }}
          >
            {errors.password.message}
          </span>
        )}

        <BlogBtn
          type="submit"
          className="button"
          text={isLoading ? "Logging in..." : "Login"}
          disabled={isLoading}
        />

        <div className="form-footer-links">
          <Link to="/register" className="form-link">
            Don't have an account? Signup
          </Link>
          <Link to="/home" className="form-link back-home">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
