import React, { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "../assets/sample.pdf";
const ViewPdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-page">
      <div className="pdf-container">
        <div className="pdf">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ViewPdf;
