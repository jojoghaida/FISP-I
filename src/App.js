// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Camera from './Camera';
import Navi from './Navi';
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';
import { useEffect, useState } from 'react';

function App( ) {

  const [ sensor, sensorSwitch ] = useState( true );
  const cameraPower = ( ) => sensorSwitch(!sensor);
  const [ lastImg, setLatestImg ] = useState( null );
  const [ imagesInSession, updateImages ] = useState( [ ] );
  console.log(lastImg);
  return (
    <div id="App">
      <Head/>
      <div id="projectRef"><img src="CHRISTOPHER.jpg"/></div>
      <div id="Content">
        <Camera on={sensor} lastImg={lastImg} setLatestImg={setLatestImg}/>
      </div>
      <Navi
        cameraPower={cameraPower}
        />
    </div>
  );
}

export default App;
