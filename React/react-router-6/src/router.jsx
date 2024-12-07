import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import BookList from "./pages/book-list"
import Login from "./pages/login"
import ReadingNotes from "./pages/reading-notes"
import BookDetail from "./pages/book-detail"
import NoteDetail from "./pages/note-detail"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "list",
        element: <BookList />
      },
      {
        path: "notes",
        element: <ReadingNotes />
      },
      {
        path: "bookDetail/:index",
        element: <BookDetail />,
      },
      {
        path: "noteDetail",
        element: <NoteDetail  />,
      },
    ]
  },
])

export default router