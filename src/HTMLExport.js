import React from "react";
// import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import logo from "./logo.svg";

const HTMLExport = () => {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const onExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const onExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
  };

  return (
    <>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div ref={contentArea}>
          <h1>KendoReact PDF Content Starts here...</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>You can export using any of the two given methods</p>
          <div>
            <Button primary={true} onClick={onExportWithComponent}>
              Export with Component
            </Button>
            <Button onClick={onExportWithFunction}>Export with Method</Button>
          </div>
        </div>
      </PDFExport>
    </>
  );
};

export default HTMLExport;
