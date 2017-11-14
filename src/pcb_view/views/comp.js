import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

// import {toggleTodo, removeTodo} from '../actions.js';

const Comp = ({
  x,
  y,
  width,
  height,
  name,
  id,
  result
}) => {
  return (<rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill="#1e73e7"
    fillOpacity={0.3}
    stroke="#1e73e7"
    strokeWidth={1}/>);
};

Comp.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  // 记得试一下增加写传入属性回如何   onToggle: PropTypes.func.isRequired,   onRemove:
  // PropTypes.func.isRequired,   completed: PropTypes.bool.isRequired,   text:
  // PropTypes.string.isRequired

}

// const mapDispatchToProps = (dispatch, ownProps) => {   const {id} = ownProps;
//   return {     onToggle: () => dispatch(toggleTodo(id)),     onRemove: () =>
// dispatch(removeTodo(id))   } };

export default connect(null, null)(Comp);