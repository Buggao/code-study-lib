import { createBrowserRouter } from "react-router-dom";
import App from './App';
import IssuePage from './pages/issue-page';
import BooksPage from './pages/books-page';
import InterviewsPage from './pages/interviews-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <IssuePage />,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
      {
        path: 'interviews',
        element: <InterviewsPage />,
      },
    ]
  },
])

export default router