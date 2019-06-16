import React from 'react';
import {useDropzone} from 'react-dropzone';
import './DragZone.css';

// class DropAndCrop extends React.Component {

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes

    </li>
  ));

  const handleOnDrop = (files, rejectedFiles) => {
    console.log(files)
  }
  
  
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps({
        })} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Basic;
// export default DropAndCrop;

