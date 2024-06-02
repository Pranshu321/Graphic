import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { auth, db } from "../firbase";
import Job from "../assets/img/Job-Banner.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const GetClients = () => {
  const navigate = useNavigate();
  const userActivity = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        navigate("/");
        // ...
      }
    });
  };

  function sendMail(name, email) {
    emailjs
      .send(
        "service_6kpfmja",
        "template_nmyq33p",
        {
          name: name,
          Cname: auth.currentUser?.displayName,
          Cemail: auth.currentUser?.email,
          email: email,
        },
        "M59Q72Ln2jOVV1krL"
      )
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Congo Applied!!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Internal Server Error");
      });
  }

  const usersCollection = db.collection("JobList");

  const [document, setDocument] = useState();

  useEffect(() => {
    userActivity();
    const getJobs = async () => {
      const data = await getDocs(usersCollection);
      let jobs = [];
      data.docs.forEach((doc) => {
        jobs.push({ ...doc.data(), id: doc.id });
      });
      setDocument(jobs);
    };

    getJobs();
  }, []);
  console.log(document);

  return (
    <div>
      {/* <Header /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#9059DB",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "#9059DB",
              secondary: "black",
            },
          },
        }}
      />
      <div className="w-full min-h-screen max-h-max flex bg-gray-200 flex-wrap px-5 gap-4 py-10 items-start">
        {document?.map((item, idx) => (
          <div className="relative mt-6 flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="mb-4 h-12 w-12 text-purple-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.jobTitle}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {item.jobdes}
              </p>
            </div>
            <div className="flex justify-start pl-6 py-2">
              <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {item.joblevel}
              </span>
              <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {item.remote === true ? "remote" : "Onsite"}
              </span>
              <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {item.State}
              </span>
            </div>
            <div className="p-6 pt-0">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all bg-purple-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                onClick={() => {
                  sendMail(item.Name, item.Email);
                }}
              >
                Apply
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetClients;
