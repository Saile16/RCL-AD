import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ViewPdf from "./components/ViewPdf";
import Form from "./components/Form";
import InfoPage from "./components/InfoPage";
import { useState } from "react";
function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        {showPdf ? <ViewPdf /> : <InfoPage />}

        <Form showPdf={showPdf} setShowPdf={setShowPdf} />
      </div>
    </>
  );
}

export default App;
