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
      })
      .catch((err) => {
        console.error(err);
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
      <div className="w-full min-h-screen max-h-max flex bg-gray-200 flex-wrap gap-10 justify-center py-10 items-start">
        {document?.map((item, idx) => (
          <div
            key={item.id}
            class="max-w-sm overflow-hidden shadow-lg bg-white rounded-lg"
          >
            <img class="w-full" src={Job} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.jobTitle}</div>
              <p class="text-gray-700 text-base">{item.jobdes}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.joblevel}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.remote === true ? "remote" : "Onsite"}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.State}
              </span>
              <span className="inline-block">
                <button
                  onClick={() => {
                    sendMail(item.Name, item.Email);
                  }}
                  class="ml-3 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Apply
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetClients;
