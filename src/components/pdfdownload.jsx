import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = () => {
  const doc = new jsPDF();
  doc.text("Quotation", 10, 10);
  doc.autoTable({
    head: [["S.No", "Item", "Quantity", "Price/Qty", "Total Price"]],
    body: [
      [1, "Sofa", 2, "₹5000", "₹10,000"],
      [2, "Chandelier", 1, "₹8000", "₹8000"],
    ],
  });
  doc.save("quotation.pdf");
};

const PDFDownload = () => (
  <button onClick={generatePDF} className="download-btn">Download PDF</button>
);

export default PDFDownload;