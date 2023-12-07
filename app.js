// const heading=React.createElement('h1',{},'NAsmaste Duniya from react!!');

import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id :"parent"},
[React.createElement("div",{id : "child1"},[
    React.createElement("h1",{},"Its Abhi learning NAmaste React"),
    React.createElement("h2",{},"Iam h2 tag!")
]),
React.createElement("div",{id : "child1"},[
    React.createElement("h1",{},"Iam h1 tag"),
    React.createElement("h2",{},"Iam h2 tag!")
])])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);