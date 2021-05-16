import { useEffect, useState } from 'react';
//main
const SetMeta = ( { } ) => {
  const [ expanded, setExp ] = useState( null );
  return <div id="metaControl">
    <div><div>param</div><SelVal index={0} expanded={expanded} setExp={setExp}/></div>
    <div><div>param</div><SelVal index={1} expanded={expanded} setExp={setExp}/></div>
    <div><div>param</div><SelVal index={2} expanded={expanded} setExp={setExp}/></div>
  </div>;
}; export default SetMeta;
//child components
const SelVal = ( { index, expanded, setExp } ) => {
  const mode = ( expanded !== index) ? {funcVal:index} : {
    style: {
      backgroundColor: "white",
      position: "absolute",
      margin: "15px",
      width: "90%",
      zIndex: "10000",
      maxHeight: "500px"
    },
    funcVal: null
  };
  return <div style={mode.style} onClick={ ( ) => setExp( mode.funcVal ) }>
    value
  </div>;
};
