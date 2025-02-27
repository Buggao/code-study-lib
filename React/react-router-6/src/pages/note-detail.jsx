import { useLocation } from "react-router-dom"

function NotesDetails(){

	const {state} = useLocation()
	console.log("NotesDetails", state)
	return (
		<div className="text-center p-20">
			<h2>Notes Details</h2>
			<i>{state.index + 1}</i>
			<h3>{state.noteInfo.title}</h3>
			<p>{state.noteInfo.content}</p>
			<p>{state.noteInfo.author}</p>
			<p>{state.noteInfo.date}</p>
		</div>
	)
}

export default NotesDetails