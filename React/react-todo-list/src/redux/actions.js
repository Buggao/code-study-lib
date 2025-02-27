import { ADD } from "./actionType"

export const addAction = (content) => {
  return {
    type: ADD,
    data: content
  }
}

export const delAction = (index) => {
  return {
    type: 'DELETEAction',
    index
  }
}

export const editAction = (index) => {
  return {
    type: 'EDITAction',
    index,
  }
}