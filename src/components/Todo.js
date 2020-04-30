import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            item: '',
            todos: []
        }
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    handleClick = () => {
        const todos = this.state.todos
        todos.push(this.state.item)
        this.setState({
            todos: todos
        })
    }

    handleDelete = (todo) => {
        this.setState({
            todos: this.state.todos.filter(el => el !== todo)
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} /> 
                    <button type="button" onClick={this.handleClick}>Add</button>
                    <ul>
                        {this.state.todos.map((todo, index) => 
                            <span key={index}>
                                <li>{todo}</li>
                                <button type="button" onClick={() => this.handleDelete(todo)}>delete</button>
                            </span>
                        )}
                    </ul>
                </form>
            </div>
        )
    }
}

export default Todo
