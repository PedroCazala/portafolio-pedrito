import { Document, Page } from 'react-pdf';

export default function ViewCV() {
    const url = __dirname + '/cv.pdf'
  return (
    <Document file={url}>
      <Page pageNumber={1} />
    </Document>
  )
}
