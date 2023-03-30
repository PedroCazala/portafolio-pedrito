import { Document, Page } from 'react-pdf';

export default function ViewCV() {
    const pdfUrl = 'https://www.loqueleo.com/ar/uploads/2016/03/ay-cuanto-me-quiero.pdf'//__dirname + '/cuatrimestrales.pdf'
  return (
    <div>
      <Document file={pdfUrl} >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}
