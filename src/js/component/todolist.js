import React, { useState } from "react";
import PropTypes from "prop-types";

export const TodoList = props => {
	const { todos, setTodos } = props;

	const makeList = () => {
		return todos.map((item, index) => (
			<li key={index}>
				{item.label}
				<span className="ml-5" onClick={() => remove(item)}>
					x
				</span>
			</li>
		));
	};

	const remove = itemToRemove => {
		let newArray = todos.filter(item => item != itemToRemove);
		setTodos(newArray);
	};

	return <ul>{makeList()}</ul>;
};

TodoList.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func
};
