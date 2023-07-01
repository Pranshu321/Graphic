import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { auth } from "../firbase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth?.currentUser, {
          displayName: name,
        })
          .then(() => {
            toast.success("User Created");
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        setTimeout(() => {
          navigate("/signin");
        }, 2000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("User Already exist");
        // ..
      });
  };

  const userActivity = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigate("/dashboard");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    userActivity();
  }, []);

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="my-5">
        <Header />
      </div>
      <section className="h-screen">
        <div className="h-full mx-20">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <div>
                {/* Email input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-teal-300 bg-gray-100 text-black py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput2"
                    placeholder="Display Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border border-teal-300 bg-gray-100 text-black py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border border-teal-300 bg-gray-100 text-black py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    onClick={createUser}
                    type="button"
                    className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Register
                  </button>
                  <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                    have an account?
                    <Link
                      to={"/signin"}
                      className=" ml-2 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
