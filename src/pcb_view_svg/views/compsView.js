import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';

import Comp from './comp';
import Info from './info';
import {viewWidth, viewHeight} from '../constant';
import {ResultTypes} from '../../constant';

class CompsView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.Viewer = null;
  }
  componentDidMount() {
    this
      .Viewer
      .fitToViewer();
  }
  render() {
    const {comps} = this.props; //解构赋值
    let [name,x,y,width,height,result] = ["","","","","",""];
    let rtn = comps.filter(comp=>comp.isSelected===true);
    if(rtn.length > 0)
    {
      name= rtn[0].name;
      x=rtn[0].x;
      y=rtn[0].y;
      width=rtn[0].width;
      height=rtn[0].height;
      result=rtn[0].result;
    } // 当前Info组件的这种显示方法好不好，如果不好，说出理由并改进
    return (
      <div>
        {/*<button onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}>Zoom in</button>
        <button onClick={event => this.Viewer.fitSelection(0, 0, viewWidth, viewHeight)}>Zoom area</button>
        <button onClick={event => this.Viewer.fitToViewer()}>Fit</button> */}

        <hr/>

        <ReactSVGPanZoom
          style={{border: "1px solid black"}}
          width={viewWidth}
          height={viewHeight}
          ref={Viewer => this.Viewer = Viewer}
          onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
          onDoubleClick={()=>{this.Viewer.fitToViewer()}}
          onMouseUp={event => console.log('up', event.x, event.y)}
          onMouseMove={event => console.log('move', event.x, event.y)}
          onMouseDown={event => console.log('down', event.x, event.y)}>

          <svg width={viewWidth} height={viewHeight}>
            <image 
              x="0" 
              y="0" 
              width={viewWidth} 
              height={viewHeight} 
              href="https://note.youdao.com/yws/public/resource/f84c5ba7fa541b58fdc4e649fe421896/xmlnote/WEBRESOURCEaa890d9df46d4e3a8f4b1a2717e19b44/17737" 
            />
            {comps.map((comp) => (<Comp
              key={comp.id}
              id={comp.id}
              name={comp.name}
              x={comp.x}
              y={comp.y}
              width={comp.width}
              height={comp.height}
              result={comp.result}
              stroke={comp.stroke}
              fill={comp.fill}/>))
            }
          </svg>
        </ReactSVGPanZoom>
        <hr/>
        <Info name={name} x={x} y={y} width={width} height={height} result={result} /> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comps: state.comps.filter(comp => 
      ((state.filters[ResultTypes.OK] === true) && (comp.result === ResultTypes.OK)) || 
      ((state.filters[ResultTypes.NG] === true) && (comp.result === ResultTypes.NG)) || 
      ((state.filters[ResultTypes.FC] === true) && (comp.result === ResultTypes.FC)))
  }
}

export default connect(mapStateToProps)(CompsView);