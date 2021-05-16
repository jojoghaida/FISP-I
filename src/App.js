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

const testBlding = {
  "name": "180 CHRISTOPHER STREET",
  "addy": "180 CHRISTOPHER STREET",
  "client": "somebody",
  "drawings": [{
    "name": "North Facade",
    "type": "elevation",
    "img": "CHRISTOPHER.jpg",
    "location_ids": [ "N1", "N2" ],
    "levels": [ 1, 2, 3, 4 ]
  }]
};

//main
const App = ( ) => {
  //states
  const [ doc, setDoc ] = useState( testBlding );
  const [ activeDrawing, switchDrawing ] = useState( );
  useEffect( ( ) => switchDrawing( doc.drawings[0] ), [ doc ] );
  const [ activeTab, setTab ] = useState( "CAMERA" );
  const [ images, updateImages ] = useState( [ ] );
  const [ lastImg, setLatestImg ] = useState( );
  const addToImageLib = newImg => updateImages( images => [...images, newImg] );
  const [ photoMeta, updateMetaFrame ] = useState( { "Level": {"value": 4},"Location ID": {"value": "#N14" } } );
  const [ drawing, setNewDrawing ] = useState( );
  const [ projectMapScale, setMapScale ] = useState( "mini" );
  const [ deviceList, setdeviceList ] = useState( );
  useEffect( ( ) => setLatestImg( images[ images.length - 1] ), [ images ] );
  //get device list
  useEffect( async ( ) => { const x = await getDevices( ); setdeviceList( x ); } );
  //functions
  const content = ( ) => {
    switch ( activeTab ) {
      case "GALLERY": return <Gallery imagesInSession={images}/>;
      case "CAMERA": return <Camera lastImg={lastImg} setLatestImg={addToImageLib} deviceList={deviceList}/>;
      case "DOC": return <div id="photoGrid">doc</div>;
      case "META": return <div id="photoGrid">meta</div>;
      default: return "error";
    }
  };
  const showMap = ( activeTab !== "CAMERA" ) ? null :
  <BluePrint drawing={activeDrawing} metaData={photoMeta} setMeta={updateMetaFrame}/>
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
