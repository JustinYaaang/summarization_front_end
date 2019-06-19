import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class DragZone4 extends Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0].path);
    // this.setState(state => ({ filePath: "A" }));
    this.props.change(acceptedFiles[0].path);
  }

  render() {
    const maxSize = 1048576;
    return (
      <div className="text-center mt-5">
        <Dropzone
          onDrop={this.onDrop}
          accept={'.doc,.docx,.pdf'}
          minSize={0}
          maxSize={maxSize}
        >
          {({getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
            const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "File type not accepted, sorry!"}
                {isFileTooLarge && (
                  <div className="text-danger mt-2">
                    File is too large.
                  </div>
                )}
<ul className="list-group mt-2">
  {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
    <li className="list-group-item list-group-item-success">
      {acceptedFile.name}
    </li>
  ))}
</ul>
              </div>

            )}
          }
        </Dropzone>
      </div>
    );
  }
}

export default DragZone4;