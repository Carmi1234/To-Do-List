import React, { useState } from "react";
import { Form } from "./form";
import { TodoList } from "./todolist";

export const Home = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	return (
		<div>
			<Form todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};
