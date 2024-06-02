import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { db } from "../firbase";

const ShowBlogs = () => {
  const usersCollection = db.collection("AllBlogs");

  const [document, setDocument] = useState();

  useEffect(() => {
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
    <>
      <div className="my-5">
        <Header />
      </div>
      <div className="flex justify-center gap-10 min-h-screen max-h-max my-5 mx-10">
        {document?.map((item) => (
          <div className="relative block overflow-hidden w-1/3 h-72 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  By {item.name}
                </p>
              </div>
              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="max-w-[40ch] text-sm text-gray-500">
                {item.text.slice(0, 100)}
              </p>
            </div>
            <dl className="mt-2 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">{item.Date}</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">{item.Time}</dd>
              </div>
            </dl>
            <Link to={`/showblog/${item.id}`}>
              <div className="py-1">
                <button class=" bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="my-5">
        <Footer />
      </div>
    </>
  );
};

export default ShowBlogs;
