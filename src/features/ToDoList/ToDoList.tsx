import { use, useEffect, useState } from 'react';
import { CreateToDo } from '../CreateToDo';
import { fetchTodos } from '@/shared/api';
import { ToDoCard } from '../ToDoCard';
import { ToDo } from '@/shared/types';

export function ToDoList() {
	const [toDos, setToDos] = useState<ToDo[]>([]);

	useEffect(() => {
		fetchTodos().then(setToDos);
	}, []);

	return (
		<div>
			<CreateToDo />
			<h1>ToDo List</h1>
			{toDos.map((toDo) => (
				<ToDoCard key={toDo.id} toDo={toDo} />
			))}
		</div>
	);
}
