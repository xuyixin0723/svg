import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {createComps} from '../actions.js';

class CreateComps extends Component { 
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: '',
    //   isCreateCompsDisabled: false
    };
  }

  onSubmit(ev) {
    ev.preventDefault();

    const compCnt = parseInt(this.state.value,0);
    if (compCnt<1) {
     return;
    }

    this.props.onCreate(compCnt);
    this.setState({value: ''});
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="number" onChange={this.onInputChange} value={this.state.value} />
          <button type="submit" disabled={this.isCreateCompsDisabled}>
            生成元器件数据
          </button>
        </form>
      </div>
    )
  }
}

CreateComps.propTypes = {
  onCreate: PropTypes.func.isRequired
};


// const mapStateToProps = (state) => {
//     return state.isCreateCompsDisabled;
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (compCnt) => {
      dispatch(createComps(compCnt));
    }
  }
};

export default connect(null, mapDispatchToProps)(CreateComps);