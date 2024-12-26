import { useState } from "react";

export function CreateToDo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTitle('');
    setDescription('');
    console.log(event.target.title.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={title} />
      <input type="text" name="description" placeholder="Description" value={description} />
      <button type="submit">Create</button>
    </form>
  )
} 