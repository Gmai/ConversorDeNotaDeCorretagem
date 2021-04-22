import '../assets/app.css'
import pdf from "pdf-extraction"
import ReactFileReader from 'react-file-reader'

const App = () => {
  // let dataBuffer = fs.readFileSync("test.pdf")
 
  // pdf(dataBuffer).then(function (data) {
  //     // number of pages
  //     console.log(data.numpages);
  //     // number of rendered pages
  //     console.log(data.numrender);
  //     // PDF info
  //     console.log(data.info);
  //     // PDF metadata
  //     console.log(data.metadata);
  //     // PDF.js version
  //     // check https://mozilla.github.io/pdf.js/getting_started/
  //     console.log(data.version);
  //     // PDF text
  //     console.log(data.text);
  // });

  const handleFiles = files => {
    debugger
    for(let i =0;i<files.fileList.length;i++){
      const file= files.fileList[i]
      debugger
      pdf(file).then(function (data) {
        debugger
        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text);
    })
    }
  }

  // let pdfParser = new PDFParser();

  // pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  // pdfParser.on("pdfParser_dataReady", pdfData => {
  //   debugger
  //   fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
  // });

  // pdfParser.loadPDF("./test.pdf");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactFileReader handleFiles={handleFiles} base64={true}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React sd
        </a>
      </header>
    </div>
  );
}

export default App;
