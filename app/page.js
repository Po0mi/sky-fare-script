"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import Image from "next/image"; // Import the Image component from Next.js

// InputField Component
const InputField = ({ label, icon, placeholder, type, value, onChange }) => {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <div className="flex flex-col mt-4 max-w-sm w-full">
      <label htmlFor={inputId} className="text-white text-sm">
        {label}
      </label>
      <div className="flex items-center py-2 px-4 mt-2 w-full bg-black rounded-lg border-2 border-white border-solid">
        <Image
          loading="lazy"
          src={icon}
          alt="icon"
          width={24} // Set the width
          height={24} // Set the height
          className="object-contain mr-3"
        />
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-white outline-none placeholder-gray-400 text-sm"
          aria-label={label}
        />
      </div>
    </div>
  );
};

// Button Component
const Button = ({ children, onClick, className = "" }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute any custom handler passed as props
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-40 py-2 text-2xl text-black bg-yellow-400 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all transform hover:bg-yellow-500 hover:shadow-[0px_6px_8px_rgba(0,0,0,0.3)] hover:scale-105 max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
};

// LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email === "test@example.com" && password === "password123") {
      router.push("/home"); // Navigate to the flightBooking page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center px-8 pt-16 pb-24 text-lg text-white rounded-3xl max-md:px-5 max-md:pb-16">
      <div className="flex flex-col max-w-lg w-full">
        <h1 className="self-center text-8xl font-bold text-white max-md:text-10xl" style={{ fontFamily: '"Roboto", sans-serif' }}>
          Sky Fare
        </h1>
        <p className="self-center mt-2.5 text-black text-lg">your journey begins with a tap</p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            icon="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4baba93277425eeed757dbfaf720c11a0c9f164f713f12587b89ec25bb06f152?apiKey=575482322951499baba16b3a7f82119f&"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            icon="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/e8165b5c28444f8540c709af744e9ef16d02d044d8b955f723c07f83bdc1b392?apiKey=575482322951499baba16b3a7f82119f&"
            placeholder="*********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="self-end mt-2 text-sm text-blue-600 hover:text-blue-800"
            onClick={() => {}}
          >
            Forgot password?
          </button>

          <div className="flex flex-col items-center mt-6 w-full">
            <Button>Log In</Button>

            <div className="flex items-center mt-6 w-full">
              <hr className="flex-grow border-t border-gray-400" />
              <span className="mx-4 text-sm">Or</span>
              <hr className="flex-grow border-t border-gray-400" />
            </div>

            <div className="flex gap-4 items-center mt-4 justify-center">
              <Image
                loading="lazy"
                src="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
                alt="Google Icon"
                width={48}
                height={48}
                className="object-contain rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
              />
              <Image
                loading="lazy"
                src="https://img.freepik.com/premium-vector/facebook-icon-illustration-facebook-app-logo-social-media-icon_561158-3660.jpg?semt=ais_hybrid"
                alt="Facebook Icon"
                width={48}
                height={48}
                className="object-contain rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
              />
              <Image
                loading="lazy"
                src="https://i.etsystatic.com/24423171/r/il/3f60f3/5599338649/il_570xN.5599338649_rcwe.jpg"
                alt="Apple Icon"
                width={48}
                height={48}
                className="object-contain rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
              />
            </div>

            <div className="mt-7 text-sm">
              <span style={{ fontFamily: '"Radio Canada Big", sans-serif', color: "rgb(0, 0, 0)" }}>
                Don't have an account?{" "}
              </span>
              <button
                type="button"
                style={{
                  fontFamily: '"Radio Canada Big", sans-serif',
                  color: "rgb(26, 127, 193)",
                }}
                className="text-blue-600 hover:text-blue-800"
                onClick={() => {}}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Page Component (Rendering LoginForm)
const Page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/smooth-yellow-gradient-wallpaper-with-abstract-blur-effect-vector_1017-49159.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoginForm />
      <Image
        src="https://png.pngtree.com/png-clipart/20220110/original/pngtree-black-and-white-flying-paper-plane-png-image_7048937.png"
        alt="Flying Paper Plane"
        width={200} // Set the width
        height={160} // Set the height
        className="absolute top-0 left-25 w-50 h-40 transform rotate-45"
      />
    </div>
  );
};

export default Page;
