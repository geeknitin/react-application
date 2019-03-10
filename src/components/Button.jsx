const React = require('react');

class Button extends React.Component {

    // this is require to maintain states for class components
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(prevState => {
            return { count: prevState + 1} ;
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }

}

//module.exports =  Button;
