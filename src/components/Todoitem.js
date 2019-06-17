import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Todoitem extends Component {
    
    getSytle = () => {
        return {
            backGround: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getSytle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}></button>
                </p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes= {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backGround: 'red',
    color: 'red',
    border: 'none',
    padding: '10px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
