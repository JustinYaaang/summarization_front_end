import React from 'react';
import './submitPage.css';
// import DropAndCrop from './DragZone2';
import DragZone from './DragZone';
import DragZone3 from './DragZone3';
import DragZone4 from './DragZone4';

import postPdf from './BackendService';
import { Button } from "semantic-ui-react";

const fileType = "pdf";

class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ""
    };
    this.change = this.change.bind(this);
  }

  change(filePath){
    this.setState({filePath})
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("new file path: " + this.state.filePath);

    console.log("AAA");
    // postPdf(
    //   fileType,
    //   "test.pdf"
    // );
  };

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
          <Button color="red" onClick={this.handleSubmit}>
            Send
          </Button>
        </div>

        <div>
          <DragZone4 change={this.change} />
        </div>


      </div>

    );
  }
}

export default SubmitPage;