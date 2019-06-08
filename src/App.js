import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">Summarization & Translation</a>
        
      </div>
      <div>
        <nav class="probootsrap-nav">
          <ul>
            <li class="active"><a href="index.html">Submit Your Document</a></li>
            <li><a href="what-we-do.html"> </a></li>
            <li><a href="what-we-do.html">Read The Translation</a></li>

          </ul>
        </nav>
      </div>

      <div className="Div1">
        <textarea className="textArea1">
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.
          I am a text area. I am a text area. I am a text area. I am a text area.

        </textarea>
      </div>
      <div className="Div2">
        <textarea className="textArea1">
          我是一个文本框。
          我是一个文本框。
          我是一个文本框。
          我是一个文本框。
          我是一个文本框。
          我是一个文本框。
        </textarea>
      </div>

    </div>
    // <div>

  );
}

export default App;
