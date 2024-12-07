import { getNotes }from "../api"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function ReadingNotes() {

  const navigate = useNavigate();
  let notes = useEffect(()=> {
    let _notes = getNotes()
    return _notes 
  })
  // 定义阅读笔记数组对象
  // const notes = [
  //   {
  //     title: "Note 1: The Great Gatsby",
  //     author: "F. Scott Fitzgerald",
  //     content: "This novel explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
  //     date: "2023-10-01"
  //   },
  //   {
  //     title: "Note 2: To Kill a Mockingbird",
  //     author: "Harper Lee",
  //     content: "The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
  //     date: "2023-10-02"
  //   },
  //   {
  //     title: "Note 3: 1984",
  //     author: "George Orwell",
  //     content: "A dystopian novel about the dangers of totalitarianism and government surveillance.",
  //     date: "2023-10-03"
  //   }
  // ];
  const handleNoteClick = (note, index) => {
    navigate("/noteDetail", {state: {noteInfo: note, index:index}})
  };

  return (
    <div className="reading-notes p-20">
      <h1>Reading Notes</h1>
      {notes.map((note, index) => (
        <div key={index} 
          className="note-item my-5 cursor-pointer border border-solid border-slate-200 rounded-lg p-5 flex justify-between items-center shadow-md shadow-blue-800"
          onClick={() => handleNoteClick(note, index)}>
          <div className="left">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
          <div className="right">
            <p><strong>Author:</strong> {note.author}</p>
            <p><strong>Date:</strong> {note.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadingNotes;