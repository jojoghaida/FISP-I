// import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Camera from './Camera';
import Navi from './Navi';
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';

function App() {
  return (
    <div id="App">
      <Head/>
      <Camera/>
      <Navi/>
    </div>
  );
}

export default App;
