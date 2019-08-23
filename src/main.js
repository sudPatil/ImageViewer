import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../style/main.css';

const images = [
    "https://picsum.photos/id/1/500/600",
    "https://picsum.photos/id/100/500/600",
    "https://picsum.photos/id/1000/500/600",
    "https://picsum.photos/id/1001/500/600",
    "https://picsum.photos/id/1002/500/600",
    "https://picsum.photos/id/1003/500/600",
    "https://picsum.photos/id/1005/500/600",
    "https://picsum.photos/id/1009/500/600",
    "https://picsum.photos/id/1061/500/600",
    "https://picsum.photos/id/1062/500/600",
    "https://picsum.photos/id/1063/500/600",
    "https://picsum.photos/id/1064/500/600",
    "https://picsum.photos/id/1065/500/600",
    "https://picsum.photos/id/1066/500/600",
]

ReactDOM.render(<App imageList={images} />, document.getElementById("root"))