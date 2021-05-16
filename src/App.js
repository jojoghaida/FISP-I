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


const getDevices = async ( ) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices;
};

//main
const App = ( ) => {
  //states
  const [ activeTab, setTab ] = useState( "CAMERA" );
  const [ images, updateImages ] = useState( [ ] );
  const [ lastImg, setLatestImg ] = useState( null );
  const addToImageLib = newImg => updateImages( images => [...images, newImg] );
  const [ photoMeta, updateMetaFrame ] = useState( { "Level": {"value": 4},"Location ID": {"value": "#N14" } } );
  const [ projectMapScale, setMapScale ] = useState( "mini" );
  const [ deviceList, setdeviceList ] = useState( null );
  useEffect( ( ) => { setLatestImg( images[ images.length - 1] ); }, [ images ] );
  useEffect( async ( ) => { const x = await getDevices( ); setdeviceList( x ); } );
  //functions
  const content = ( ) => {
    switch ( activeTab ) {
      case "GALLERY": return <Gallery imagesInSession={images}/>;
      case "CAMERA": return <Camera lastImg={lastImg} setLatestImg={addToImageLib} deviceList={deviceList}/>;
      case "DOC": return <div id="photoGrid">document</div>;
      default: return "error";
    }
  };
  const showMap = ( activeTab !== "CAMERA" ) ? null :
  <BluePrint/>
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
