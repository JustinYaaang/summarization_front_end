import React from 'react';
import './submitPage.css';
import DragZone from './DragZone';


class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <textarea placeholder="Paste the content here..."></textarea>
        </div>

        <div>
          <a href="read">Submit</a>
        </div>

      </div>

    );
  }
}

export default SubmitPage;