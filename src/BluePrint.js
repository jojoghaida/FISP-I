import { useEffect, useState } from 'react';
//main
const BluePrint = ( {} ) => {
  const [ viewportSize, setViewPortSize ] = useState( true );
  const style = (viewportSize === true) ? null : {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "calc(100% - var(--safeAreaTop) - 55px - var(--safeAreaTop) - var(--headSize))"
  };
  return <div id="bluePrint" style={style}>
    <div id="drawingContainer">
      <img src="CHRISTOPHER.jpg"/>
    </div>
    { (viewportSize) ? null : null }
    <div id="expBluePrint" onClick={setViewPortSize.bind( this, !viewportSize )}/>
  </div>;
}; export default BluePrint;
