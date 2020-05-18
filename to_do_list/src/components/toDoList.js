import React from 'react'
import ToDoForm from './toDoForm'
import ToDO from './toDo'
export default class ToDoList extends React.Component {
	state = {
		toDos: []
	}

	addToDo = newToDo => {
		this.setState({
			toDos: [newToDo, ...this.state.toDos]
		})
	}

	render() {
		return (
			<div>
				<ToDoForm onSubmit={this.addToDo} />
				{this.state.toDos.map(toDo => (
					<ToDO key={toDo.id} text={toDo.text} />
				))}
			</div>
		)
	}
}