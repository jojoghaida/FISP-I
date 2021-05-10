import Head from './Head';
import Camera from './Camera';
import { ReactComponent as LogoSvg } from './SVG/peLogo.svg';

const Ui = ( ) => {

  return(
    <div id="Ui">
      <Head/>
      <Camera/>
      <div id="navi">
        <div>btn</div>
        <div>btn</div>
        <div>btn</div>
        <div>btn</div>
      </div>
    </div>
  );
};

export default Ui;
