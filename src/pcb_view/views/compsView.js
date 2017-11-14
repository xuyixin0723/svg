import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import Comp from './comp';


class CompsView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.Viewer = null;
  }
  componentDidMount() {
    this.Viewer.fitToViewer();
  }
  render() {
    const {comps} = this.props; //解构赋值
    return (
      <div>
        <button onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}>Zoom in</button>
        <button onClick={event => this.Viewer.fitSelection(40, 40, 200, 200)}>Zoom area</button>
        <button onClick={event => this.Viewer.fitToViewer()}>Fit</button>

        <hr/>

        <ReactSVGPanZoom
          style={{border: "1px solid black"}}
          width={500} height={500} ref={Viewer => this.Viewer = Viewer}
          onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
          onMouseUp={event => console.log('up', event.x, event.y)}
          onMouseMove={event => console.log('move', event.x, event.y)}
          onMouseDown={event => console.log('down', event.x, event.y)}>

          <svg width={900} height={800}>
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
        </ReactSVGPanZoom>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {comps: state.comps}
}
  
export default connect(mapStateToProps)(CompsView);