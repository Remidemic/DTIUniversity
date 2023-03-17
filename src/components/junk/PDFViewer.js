import React from 'react';
import { Document, Page } from 'react-pdf';

class PDFViewer extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        const { filePath } = this.props;

        return (
            <div>
                <Document
                    file={filePath}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export default PDFViewer;
