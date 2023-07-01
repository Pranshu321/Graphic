import React, { useState, useEffect }from 'react'
import PhotoPrintsCard from "../components/PhotoPrintsCard";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { db } from "../firbase";
import { getDocs } from "firebase/firestore";



const PhotoPrints = () => {
    const usersCollection = db.collection("Marketplace");

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

      <div className="grid grid-cols-3 gap-2 ">
        {document?.map((item) => (
          <PhotoPrintsCard
            key={item.id}
            price={item.price}
            title={item.title}
            image={item.url}
            Date={item.Date}
            Time={item.Time}
            id={item.id}
          />
        ))}
      </div>
      <div className="my-5">
        <Footer />
      </div>
    </>
  );
}

export default PhotoPrints;