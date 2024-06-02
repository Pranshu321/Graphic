import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { db } from "../firbase";
import { collection, addDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";

const RequestListing = () => {
  const [formdata, setformdata] = useState({
    Name: "",
    CName: "",
    Email: "",
    Phone: "",
    Remote: "",
    State: "",
    jobTitle: "",
    joblevel: "",
    jobdes: "",
    Timestamp: new Date().toLocaleTimeString("en-US"),
  });

  const formData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "JobList"), formdata);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Job registered");
    } catch (error) {
      toast.error("Currently We are down , try after some time");
    }
  };

  return (
    <>
      <div className="my-6">
        <Header />
      </div>
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
        <form
          className="w-full h-full my-20 flex justify-center items-center flex-col"
          onSubmit={formData}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                required
                placeholder="Jane"
                onChange={(e) =>
                  setformdata({ ...formdata, Name: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                required
                placeholder="Doe"
                onChange={(e) =>
                  setformdata({ ...formdata, CName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                required
                placeholder="xyz@gmail.com"
                onChange={(e) =>
                  setformdata({ ...formdata, Email: e.target.value })
                }
              />
              <p className="text-gray-600 text-xs italic">
                Fill it Correct as Interested Candidates Info Send on this only.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Mobile
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                required
                placeholder="xyz@gmail.com"
                onChange={(e) =>
                  setformdata({ ...formdata, Phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap mx-3 mb-6">
            <div className="flex mb-4 items-center p-5">
              <input
                id="default-radio-1"
                type="radio"
                value="true"
                name="remote-true"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) =>
                  setformdata({ ...formdata, Remote: e.target.value })
                }
              />
              <label
                for="default-radio-1"
                className="ml-2 text-lg font-medium text-gray-900"
              >
                <span className="text-black">Remote</span>
              </label>
            </div>
            <div className="flex mb-4 items-center p-5">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="false"
                name="remote-true"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) =>
                  setformdata({ ...formdata, Remote: e.target.value })
                }
              />
              <label
                for="default-radio-2"
                className="ml-2 text-lg font-medium text-gray-900"
                style={{ color: "black" }}
              >
                Onsite
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                required
                placeholder="Albuquerque"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                State
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                required
                placeholder="Delhi"
                onChange={(e) =>
                  setformdata({ ...formdata, State: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                required
                placeholder={90210}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 mt-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Job Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                required
                placeholder="Photographer"
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    jobTitle: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Experience Level
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                required
                placeholder="Beginner"
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    joblevel: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Job Description
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                rows={5}
                cols={80}
                required
                placeholder="xyz@gmail.com"
                onChange={(e) =>
                  setformdata({ ...formdata, jobdes: e.target.value })
                }
              />
              <p className="text-gray-600 text-xs italic">
                Fill it Elaboarative for better idea.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-greenish hover:bg-greenish text-white font-bold py-4 px-8 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RequestListing;
