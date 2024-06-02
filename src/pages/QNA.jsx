import Footer from "../components/Footer";
import Header from "../components/Header";

const QNA = () => {
  return (
    <div>
      <div className="py-8">
        <Header />
      </div>
      <div id="top" className="bg-purple-100 flex justify-center py-5 my-10 mb-36">
        <iframe
          width="650"
          height="730"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/46f39210-0c76-4dc3-9800-bf7ff8c4632a"
        ></iframe>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default QNA;
