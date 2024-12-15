
import { ADD, SQUARE } from "./actionTypes"

function addAction(num) {
  return {
    type: ADD,
    num
  }
}

function squareAction() {
  return {
    type: SQUARE
  }
}

export { addAction, squareAction }