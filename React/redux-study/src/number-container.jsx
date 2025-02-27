
import PropTypes from "prop-types";
import {addAction, squareAction} from './store/actions';
import { connect } from 'react-redux';

function NumberContainer (props) {

  const {number, add, square} = props 
  return (
    <>
      <div className="value-line" style={{margin: "0 0 30px 0"}}>{number}</div>
      <div className="button-line" style={{display: "flex", gap: "10px"}}>
        <button onClick={() => add(1)}>+1</button>  
        <button onClick={() => add(2)} >+2</button>  
        <button onClick={() => square()}>平方</button>  
        <button onClick={() => {}}>+1</button>  
      </div> 
    </>
  )
}

NumberContainer.propTypes = {
  number: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  square: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    number: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (num) => dispatch(addAction(num)),
    square: () => dispatch(squareAction())
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(NumberContainer)