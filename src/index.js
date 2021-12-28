import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Color from './color';

const colorList = ["red", "orangered", "orange", "yellowgreen", "darkcyan", "blue", "blueviolet"];

ReactDOM.render(
    <div>
      <h1>Rainbow</h1>
      <div className="rainbow"> 
        {colorList.map(el => <Color bg={el}/>)}
      </div>
    </div>,
    document.querySelector("#root")
);
