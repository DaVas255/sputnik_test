import { ToDo } from '@/shared/types';

export function ToDoCard({ toDo }: { toDo: ToDo }) {
	return (
		<div>
			<h3>{toDo.title}</h3>
			<p>{toDo.description}</p>
		</div>
	);
}
