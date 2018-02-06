import React from 'react';
import ReactDOM from 'react-dom';

import dataArray from './modules/FilterableProductTable/dataArray.jsx';

import FilterableProductTable from './modules/FilterableProductTable/FilterableProductTable.jsx';


// class Clock extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         }
//     }
//
//     componentDidMount () {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount () {
//         clearInterval(this.timerID);
//     }
//
//     tick () {
//         this.setState({
//             date: new Date()
//         })
//     }
//
//     render () {
//         return <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>;
//     }
// }
//
// setInterval(function (){
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     )},
//     1000
// );
