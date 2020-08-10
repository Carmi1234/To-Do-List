import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = props => {
	const { todos, setTodos } = props; // obj. destructuring
	const [input, setInput] = useState(""); // where we are storing it temporarily

	function addTodo(todo) {
		setTodos([...todos, { label: todo, done: false }]);
	}
	function handleTaskInputChange(e) {
		setInput(e.target.value);
	}

	return (
		<form>
			<input
				type="text"
				value={todos.task}
				onChange={handleTaskInputChange}
			/>
			<input
				onClick={() => addTodo(input)}
				type="button"
				value="Add to list"
			/>
		</form>
	);
};

Form.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func,
	input: PropTypes.array,
	setInput: PropTypes.func
};
