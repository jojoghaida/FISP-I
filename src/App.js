// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Camera from './Camera';
import Navi from './Navi';
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';
import { useEffect, useState } from 'react';

function App() {

  const [ sensor, sensorSwitch ] = useState( false );
  const cameraPower = ( ) => sensorSwitch(!sensor);

  return (
    <div id="App">
      <Head/>
      <div id="projectRef"></div>
      <div id="Content">
        <Camera on={sensor}/>
      </div>
      <Navi
        cameraPower={cameraPower}
        />
    </div>
  );
}

export default App;
