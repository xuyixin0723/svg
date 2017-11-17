import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {selectComp} from '../actions';

// import {toggleTodo, removeTodo} from '../actions.js';

const Comp = ({
  x,
  y,
  width,
  height,
  name,
  id,
  result,
  stroke,
  fill,
  onSelect
}) => {
  return (<rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill={fill}
    fillOpacity={0.7}
    stroke={stroke}
    strokeWidth={2}
    onClick = {onSelect}
    />);
};

Comp.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  // 记得试一下增加写传入属性回如何   onToggle: PropTypes.func.isRequired,   onRemove:
  // PropTypes.func.isRequired,   completed: PropTypes.bool.isRequired,   text:
  // PropTypes.string.isRequired

}

// const mapDispatchToProps = (dispatch, ownProps) => {   const {id} = ownProps;
//   return {     onToggle: () => dispatch(toggleTodo(id)),     onRemove: () =>
// dispatch(removeTodo(id))   } };

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps; //解构赋值
  return {
    onSelect: () => dispatch(selectComp(id)),
  }
}

export default connect(null, mapDispatchToProps)(Comp);