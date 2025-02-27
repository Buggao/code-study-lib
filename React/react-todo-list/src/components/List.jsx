/* eslint-disable react/prop-types */
import { delAction, editAction } from '../redux/actions'
export default function List(props) {
  const lists = props.store.getState().list.map((item, index) => {
    return (
      <li 
        className={`flex justify-between items-center my-3 ${item.status ? 'line-through' : '' }`}
        key={item.content}
        id={index}
        onClick={()=> props.store.dispatch(editAction(index))}>
        <span>{item.content}</span>
        <div>
          <button className="py-1" onClick={() => props.store.dispatch(delAction(index))}>&times;</button>
        </div>
      </li>) 
    }) 
  return (
    <div className="mt-10">
      {lists}
    </div>
  )
}
