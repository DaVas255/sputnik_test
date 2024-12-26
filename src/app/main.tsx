import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { TodoListPage } from '@/pages/ToDoListPage';
import { store } from '@/app/store/store';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<StrictMode>
			<TodoListPage />
		</StrictMode>
	</Provider>
);
