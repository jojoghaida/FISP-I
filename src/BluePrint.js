import { useEffect, useState } from 'react';
//main
const BluePrint = ( {} ) => {
  const [ viewportSize, setViewPortSize ] = useState( true );
  const style = (viewportSize === true) ? null : {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  };
  return <div id="bluePrint" style={style}>
    <div id="expBluePrint" onClick={ setViewPortSize.bind( this, !viewportSize ) }/>
    <img src="CHRISTOPHER.jpg"/>
  </div>;
}; export default BluePrint;
