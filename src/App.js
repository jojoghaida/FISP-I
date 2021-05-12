//libs
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';
import { useEffect, useState } from 'react';
//stylesheet
import './App.css';
//components
import Head from './Head';
import Camera from './Camera';
import BluePrint from './BluePrint';
import Gallery from './Gallery';
import Navi from './Navi';
//main

const App = ( ) => {
  //states
  const [ activeTab, setTab ] = useState( "CAMERA" );
  const [ images, updateImages ] = useState( [ ] );
  const [ lastImg, setLatestImg ] = useState( null );
  useEffect( ( ) => { setLatestImg( images[ images.length - 1] ); }, [ images ] );
  const addToImageLib = newImg => updateImages( images => [...images, newImg] );
  const [ photoMeta, updateMetaFrame ] = useState( { "Level": {"value": 4},"Location ID": {"value": "#N14" } } );
  const [ projectMapScale, setMapScale ] = useState( "mini" );
  //functions
  const content = ( ) => {
    switch ( activeTab ) {
      case "GALLERY": return <Gallery imagesInSession={images}/>;
      case "CAMERA": return <Camera lastImg={lastImg} setLatestImg={addToImageLib}/>;
      case "DOC": return <div id="photoGrid">document</div>;
      default: return "error";
    }
  };
  const showMap = ( activeTab === "CAMERA" ) ?
  <BluePrint/> : null
  const setMeta = <div id="metaControl"><div>SET META DATA</div></div>
  //render
  return (
    <div id="App">
      <Head tab={activeTab}/>
      {showMap}
      <div id="Content">{content( )}</div>
      <Navi setTab={setTab}/>
    </div>
  );
}; export default App;
