import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {ResultTypes} from '../../constant';
import {toggleOK,toggleNG,toggleFC} from '../actions';
import './style.css'

const Filter = ({filters, onToggleOK, onToggleNG, onToggleFC}) => {
    return (
        <div className="filterStyle">
            <form>
                <input type="checkbox" onChange={onToggleOK} checked={filters[ResultTypes.OK]}/>Show OK
                <input type="checkbox" onChange={onToggleNG} checked={filters[ResultTypes.NG]}/>Show NG
                <input type="checkbox" onChange={onToggleFC} checked={filters[ResultTypes.FC]}/>Show False Call
            </form>
        </div>
    )
}

Filter.propTypes = {     
    onToggleOK: PropTypes.func.isRequireds, 
    onToggleNG: PropTypes.func.isRequireds,     
    onToggleFC: PropTypes.func.isRequireds 
}

const mapStateToProps = (state) => {
    return {filters: state.filters}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleOK: () => dispatch(toggleOK()),
        onToggleNG: () => dispatch(toggleNG()),
        onToggleFC: () => dispatch(toggleFC())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
