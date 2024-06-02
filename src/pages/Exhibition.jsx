import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ExhibitionCard from "../components/ExhibitionCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { db } from "../firbase";

const Exhibition = () => {
  const usersCollection = db.collection("Exhibition_Files");

  const [document, setDocument] = useState();
  const [likesSet, setlikes] = useState(0);

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

      <div className="flex flex-wrap justify-center gap-10">
        {document?.map((item) => (
            <ExhibitionCard
              key={item.id}
              title={item.title}
              description={item.text}
              image={item.url}
              Date={item.Date}
              Time={item.Time}
              likes={item.likes}
              id={item.id}
            />
        ))}
      </div>
      <div className="my-5">
        <Footer />
      </div>
    </>
  );
};

export default Exhibition;
