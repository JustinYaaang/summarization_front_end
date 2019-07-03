import React from 'react';
import './submitPage.css';
import DragZone from './DragZone';
import DragZone4 from './DragZone4';
import { Button } from "semantic-ui-react";
import axios, { post } from 'axios';

const submitUrl = "http://localhost:2999/submit";
const fileType = "pdf";


class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ""
    };
    this.change = this.change.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  change(filePath){
    this.setState({filePath})
  }


  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = submitUrl;
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }



  // handleChange = e => {
  //   this.setState({ filePath: "filePath"});
  // };


  render() {
    return (
      <div className="SubmitPage">
        <div class="topnav">
          <a class="active" href="#home">Summarization & Translation</a>  
        </div>

        <div>
          <nav class="probootsrap-nav">
            <ul>
              <li class="active"><a href="/">Submit Your Document</a></li>
              <li><a href="what-we-do.html"> </a></li>
              <li class="active"><a href="read">Read The Translation</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <textarea placeholder="Paste the url here..."></textarea>
        </div>

        <div class="dragDiv">
          <DragZone />
        </div>

        <div>
          <form id="uploadbanner" enctype="multipart/form-data" method="post" action={submitUrl}>
             <input id="fileupload" name="myfile" type="file" />
             <input type="submit" value="submit" id="submit" />
          </form>
        </div>

        <div>
          <DragZone4 change={this.change} />
        </div>

        <div>
          <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </form>
        </div>





      </div>

    );
  }
}

export default SubmitPage;