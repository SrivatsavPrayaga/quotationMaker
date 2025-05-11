import { Document, Page, Text, View, Image, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { position: "relative", width: "100%", height: "100%" },
 background: { position: "absolute", width: "20rem", height: "auto", alignSelf: "center", marginBottom:"20%" },
  content: { marginTop: "10%",padding: 20, zIndex: 1 },
  header: { textAlign: "center", fontSize: 20, marginBottom: 10, color: "white" },
  table: { width: "100%", borderWidth: 1 },
  row: { flexDirection: "row", borderBottomWidth: 1, padding: 5 },
  cell: { width: "16%", textAlign: "center", color: "black" },
  total: { textAlign: "right", marginTop: 10, fontWeight: "bold", color: "black" },
});

const PDFPreview = ({ headerImage, companyInfo, clientInfo, items, total }) => {
  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          {headerImage && <Image src={headerImage} style={styles.background} />}
          <View style={styles.content}>
            <Text style={styles.header}>Quotation</Text>

            {/* Company Information */}
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: "black"}}>Company: {companyInfo.name}</Text>
              <Text style={{ color: "black" }}>Address: {companyInfo.address}</Text>
              <Text style={{ color: "black" }}>Phone: {companyInfo.phone}</Text>
            </View>

            {/* Client Information */}
            <View>
              <Text style={{ color: "black" }}>To:</Text>
              <Text style={{ color: "black" }}>Client: {clientInfo.name}</Text>
              <Text style={{ color: "black" }}>Address: {clientInfo.address}</Text>
              <Text style={{ color: "black" }}>Phone: {clientInfo.phone}</Text>
              {clientInfo.email && <Text style={{ color: "black" }}>Email: {clientInfo.email}</Text>}
            </View>

            {/* Table - Now Includes Description */}
            <View style={styles.table}>
              <View style={styles.row}>
                <Text style={styles.cell}>S.No</Text>
                <Text style={styles.cell}>Item</Text>
                <Text style={styles.cell}>Qty</Text>
                <Text style={styles.cell}>Price/Qty</Text>
                <Text style={styles.cell}>Total</Text>
                <Text style={styles.cell}>Description</Text>
              </View>
              {items.map((item, index) => (
                <View style={styles.row} key={index}>
                  <Text style={styles.cell}>{index + 1}</Text>
                  <Text style={styles.cell}>{item.name}</Text>
                  <Text style={styles.cell}>{item.quantity}</Text>
                  <Text style={styles.cell}>{item.price}</Text>
                  <Text style={styles.cell}>{item.quantity * item.price}</Text>
                  <Text style={styles.cell}>{item.description || "N/A"}</Text>
                </View>
              ))}
            </View>

            {/* Grand Total */}
            <Text style={styles.total}>Grand Total: ₹{total}</Text>
            <Text style={styles.total}>GSt: 18%</Text>
            <Text style={styles.total}>Consolidated Price: ₹ {total + (total * 0.18)}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFPreview;