import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Dom from './Dom';
import NoteList from './NoteList';
import LikeBtn from './LikeBtn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('root1'));
ReactDOM.render(<Dom name='lalalalalalasz'/>, document.getElementById('root2'));
ReactDOM.render(<NoteList>
    <span>我是第一个</span>
    <span>我是第二个</span>
</NoteList>,document.getElementById('root3'));
ReactDOM.render(<LikeBtn />,document.getElementById('root4'));
registerServiceWorker();
