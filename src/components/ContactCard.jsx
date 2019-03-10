const React = require('react');

function ContactCard(props) {
    return (
        <div>
            <img src={props.imgUrl}></img>
            <h3>Name: {props.name} </h3>
            <p>Phone: {props.phone}</p>
        </div>
    );
}

module.exports = ContactCard;
