//libs
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';
import { useEffect, useState } from 'react';
//stylesheet
import './App.css';
//components
import Head from './Head';
import Camera from './Camera';
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
  const [ photoMeta, updateMetaFrame ] = useState( null );
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
  <div id="projectRef"><img src="CHRISTOPHER.jpg"/></div> : null
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
