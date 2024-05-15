import React from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportCSV = ({ csvData, fileName, wscols, headers, headerTitle }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  

  const Heading = headerTitle;

  const exportToCSV = (csvData, fileName, wscols) => {
    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet([["OneCloud"]]);
  
    // Add headers
    XLSX.utils.sheet_add_json(ws, Heading, { skipHeader: true, origin: "A3" });
  
    // Customize styling if needed
    // ws["A2"].s = { fill: { fgColor: { rgb: "#BDD7EE" } } };
  
    // Remove content from cell A3 and add the actual data
    XLSX.utils.sheet_add_json(ws, csvData, {
    //   header: headers,
      skipHeader: false,
      origin: "A3",
    });
  
    // Apply column widths
    ws["!cols"] = wscols;
  
    // Create a workbook with the worksheet
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  
    // Convert the workbook to an array buffer
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  
    // Create a Blob from the array buffer
    const data = new Blob([excelBuffer], { type: fileType });
  
    // Use FileSaver to save the Blob as a file
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  

  return (
    // <Button
    //   type="primary"
    //   className="btn button w-50 h-25"
    //   onClick={(e) => exportToCSV(csvData, fileName, wscols)}
    // >
    //   Export XLSX
    // </Button>
    <div className="text-center mt-2 mb-2 text-md-end pe-5">
      <button
        className="action_button"
        onClick={(e) => exportToCSV(csvData, fileName, wscols)}
      >
        <i className="fa-solid fa-download" /> Export
      </button>
    </div>
  );
};

export default ExportCSV;