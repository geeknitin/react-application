const React = require('react');

function TodoItem(props) {
    return (
        <div>
            <input type="checkbox" checked={props.item.completed}/>
            <b>{props.item.text}</b>
        </div>
    );
}

module.exports = TodoItem;
//
// class TodoItem extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input type="checkbox" checked={this.props.item.completed}/>
//                 <b>{this.props.item.text}</b>
//             </div>
//         );
//     }
// }
