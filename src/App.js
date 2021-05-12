// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Camera from './Camera';
import Gallery from './Gallery';
import Navi from './Navi';
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';
import { useEffect, useState } from 'react';

function App( ) {
  const [ activeTab, setTab ] = useState( "CAMERA" );
  const [ sensor, sensorSwitch ] = useState( true );
  const cameraPower = ( ) => sensorSwitch(!sensor);
  const [ lastImg, setLatestImg ] = useState( null );
  const [ imagesInSession, updateImages ] = useState( [ ] );
  const addToImageLib = newImg => updateImages( imagesInSession => [...imagesInSession, newImg] );
  useEffect( ( ) => {
    console.log(imagesInSession.length);
    setLatestImg( imagesInSession[ imagesInSession.length - 1] );
  }, [ imagesInSession ] )

  const content = ( ) => {
    switch ( activeTab ) {
      case "GALLERY":
        return(
          <Gallery imagesInSession={imagesInSession}/>
        );
        break;
      case "CAMERA":
        return(
          <Camera
            toggleSensor={sensor}
            lastImg={lastImg}
            setLatestImg={addToImageLib}
            />
        );
        break;
      default:

    }
  };

  const showMap = ( activeTab === "CAMERA" ) ?  <div id="projectRef"><img src="CHRISTOPHER.jpg"/></div> : null

  return (
    <div id="App">
      <Head tab={activeTab}/>
      {showMap}
      <div id="Content">
        {content()}
      </div>
      <Navi
        cameraPower={cameraPower}
        setTab={setTab}
        />
    </div>
  );
}

export default App;
