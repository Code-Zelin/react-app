import React, { Component } from 'react';
import './LikeBtn.css';

const _html = `<div>
    <span class="inner-item">点赞</span>
    <span>cool</span>
</div>`;

function creactDomFromString(string){
    let div_dom = document.createElement('div');
    div_dom.innerHTML = _html;
    return div_dom;
}


class LikeBtn extends Component {
    render () {
        this.el = creactDomFromString(_html);
        return this.el;
    }
}

export default LikeBtn;