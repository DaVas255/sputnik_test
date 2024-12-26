import { useState } from 'react';

export function CreateToDo() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTitle('');
		setDescription('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type='text'
				name='description'
				placeholder='Description'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type='submit'>Create</button>
		</form>
	);
}
