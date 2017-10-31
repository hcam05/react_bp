import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './components/Editor';
import './index.css'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <TextEditor />,
    document.getElementById('mount')
  );
});