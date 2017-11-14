import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Comp from './comp'
// import {FilterTypes} from '../../constants.js';

const CompsView = ({comps}) => {
  return (
    <svg width={1500} height={1000}>
      {comps.map((comp) => (
        <Comp
          key={comp.id}
          id={comp.id}
          name={comp.name}
          x={comp.x}
          y={comp.y}
          width={comp.width}
          height={comp.height}
          result={comp.result}
        />
        ))
      }
    </svg>
  );
};

CompsView.propTypes = {
  comps: PropTypes.array.isRequired
};

// const selectVisibleTodos = (todos, filter) => {   switch (filter) {     case
// FilterTypes.ALL:       return todos;     case FilterTypes.COMPLETED:
// return todos.filter(item => item.completed);     case
// FilterTypes.UNCOMPLETED:       return todos.filter(item => !item.completed);
//    default:       throw new Error('unsupported filter');   } }

const mapStateToProps = (state) => {
  return {comps: state.comps}
}

// const mapStateToProps = (state) => {   return {
//     todos: selectVisibleTodos(state.todos, state.filter)   }; }

export default connect(mapStateToProps)(CompsView);