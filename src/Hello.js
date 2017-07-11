import React, { Component } from 'react';
import list from './data.js'


class Hello extends Component {
    render() {
        return (
            <div className="Hello">
                {
                    list.name.map(function(name, index){
                        return <p key={index}>hello, {name}</p>
                    })
                }
                <div>{list.arr}</div>
            </div>
        )
    }
}

export default Hello;
