import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <h3>{this.props.title}</h3>
                <h6>{this.props.date}</h6>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}

export default Card;