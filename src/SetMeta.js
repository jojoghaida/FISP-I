import { useEffect, useState } from 'react';
//main
const SetMeta = ( { metaKeys, metaOptions } ) => {
  const [ expanded, setExp ] = useState( null );
  return <div id="metaControl">
    { metaKeys.map( ( param, i ) => <div>
        <div>{param}</div>
        <SelVal
          index={i}
          expanded={expanded}
          setExp={setExp}
          value={"values"}
          options={metaOptions[param]}/>
    </div> ) }
  </div>;
}; export default SetMeta;
//child components
const SelVal = ({ index, expanded, setExp, value, options }) => {
  const mode = ( expanded !== index ) ? {funcVal:index} : {
    style: {
      backgroundColor: "white", position: "absolute", boxShadow: "0px 0px 3px black", margin: "15px", width: "80%", zIndex: "10000", maxHeight: "500px", padding: "15px", borderRadius: "5px",
    },
    funcVal: null
  };
  return <div style={mode.style} onClick={ ( ) => setExp( mode.funcVal ) }>
    { ( expanded !== index ) ? value : options.map( option => <div>{option}</div> )}
  </div>;
};
