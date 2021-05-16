import { useEffect, useState } from 'react';
//main
const BluePrint = ( {} ) => {
  const [ viewportSize, setViewPortSize ] = useState( true );
  const style = (viewportSize === true) ? null : {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "calc(100% - 55px - var(--safeAreaTop) - var(--headSize))"
  };
  // <div id="drawingOverlay"></div>
  return <div id="bluePrint" style={style}>
    <div id="drawingContainer">
      <img src="CHRISTOPHER.jpg"/>
    </div>
    {
      ( viewportSize ) ? null :
        <div id="metaControl">
          <div><div>param</div><div>value</div></div>
          <div><div>param</div><div>value</div></div>
          <div><div>param</div><div>value</div></div>
        </div>
    }
    <div id="expBluePrint" onClick={setViewPortSize.bind( this, !viewportSize )}>exp</div>
  </div>;
}; export default BluePrint;
