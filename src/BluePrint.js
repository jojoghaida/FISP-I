import { useEffect, useState } from 'react';
import SetMeta from './SetMeta';
//main
const BluePrint = ( { drawing } ) => {
  const [ viewportSize, setViewPortSize ] = useState( true );
  if( !drawing ) return null;
  const style = (viewportSize === true) ? null : {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "calc(100% - var(--footSize) - var(--safeAreaBtm) - var(--headSize))"
  };
  // <div id="drawingOverlay"></div>
  return <div id="bluePrint" style={style}>
    <div id="drawingContainer">
      <img src={drawing.img}/>
    </div>
    { ( viewportSize ) ? null : <SetMeta metaKeys={Object.keys(drawing.meta)} metaOptions={drawing.meta}/> }
    <div id="expBluePrint" onClick={setViewPortSize.bind( this, !viewportSize )}>exp</div>
  </div>;
}; export default BluePrint;
