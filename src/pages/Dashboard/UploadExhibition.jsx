import React, { useEffect, useState } from "react";
// import "../assets/scss/components/UploadExhibition.scss"
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../firbase";
import { Toaster, toast } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UploadExhibition = () => {
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
  // const [name, setname] = useState("");
  useEffect(() => {
    userActivity();
  }, []);
  const [user, setuser] = useState({
    name: "",
    title: "",
    text: "",
    tag: "",
    exhibition: "",
    url: "",
    likes: 0,
    Date: new Date().toLocaleDateString(),
    Time: new Date().toLocaleTimeString(),
  });

  const handleUserDoc = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Exhibition_Files"), user);
    toast.success("Uploaded To Exhibition !!!");
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <>
      <div
        className="main-user flex justify-center items-center"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
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
              background: "#FA4C86",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "#FA4C86",
                secondary: "black",
              },
            },
          }}
        />
        <div
          className="container"
          style={{
            background: "#3BAEA7",
            padding: "20px 20px",
            borderRadius: "15px",
          }}
        >
          <Link to={"/dashboard"}>
            <button
              style={{
                padding: "7px 20px",
                background: "white",
                color: "#E52F8A",
                fontWeight: "600",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <span style={{ marginLeft: "4px" }}>Back</span>
            </button>
          </Link>
          <div className="card" style={{ width: "45rem" }}>
            <div className="card-image2">
              <h2 className="card-heading">
                <small style={{ color: "white", fontSize: "40px" }}>
                  Upload Work To Exhibition!!
                </small>
              </h2>
            </div>
            <form className="card-form" onSubmit={handleUserDoc}>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  onChange={(e) => {
                    setuser({ ...user, name: e.target.value });
                  }}
                  required
                />
                <label className="input-label">Display Name</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  className="input-field"
                  onChange={(e) => {
                    setuser({ ...user, title: e.target.value });
                  }}
                  required
                />
                <label className="input-label">Title</label>
              </div>
              <div className="input">
                <textarea
                  rows={2}
                  cols={3}
                  className="input-field"
                  onChange={(e) => {
                    setuser({ ...user, text: e.target.value });
                  }}
                  required
                />
                <label className="input-label">Write about Artwork</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => {
                    setuser({ ...user, tag: e.target.value });
                  }}
                  className="input-field"
                  required
                />
                <label className="input-label">Write Appropiate Tag's</label>
              </div>
              <div className="input">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={(e) => {
                    setuser({ ...user, exhibition: e.target.value });
                  }}
                >
                  <option selected>Choose a exhibitions</option>
                  <option value="Potrait">Potrait</option>
                  <option value="Macro">Macro</option>
                  <option value="Black & White">Black & White</option>
                  <option value="Landscape">Landscape</option>
                </select>
                <label
                  for="exhibitions"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Exhibitions
                </label>
              </div>
              <div className="input">
                <input
                  class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300  bg-clip-padding py-[0.32rem] px-3 leading-[2.15] font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:text-white file:bg-teal-600 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-teal-400 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                  id="formFileLg"
                  accept="image/x-png,image/gif,image/jpeg"
                  type="file"
                  required
                  onChange={(e) => {
                    const storageRef = ref(
                      storage,
                      `Exhibition/${e.target.files[0].name + v4()}`
                    );

                    // 'file' comes from the Blob or File API
                    uploadBytes(storageRef, e.target.files[0]).then(
                      (snapshot) => {
                        getDownloadURL(storageRef).then((url) =>
                          setuser({ ...user, url: url })
                        );
                        console.log("Exhibiton uploaded");
                      }
                    );
                  }}
                />
              </div>
              <div className="action">
                <button className="action-button" type="submit">
                  Publish To Exhibition
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadExhibition;
