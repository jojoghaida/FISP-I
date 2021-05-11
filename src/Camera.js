import './camStyles.css';
import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
const constraints = { audio: false, video: { width: 1280, height: 720 } };
async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log(devices);
}
const CamBox = ( {on} ) => {
  getDevices( );
  if( !on ) return null;
  return(
    <div id="cameraView">
      <Camera
        device={DEVICE.MOBILE}
        facingMode={FACING_MODE.ENVIRONMENT}
        placement={PLACEMENT.COVER}
        quality="1"
        onError={error => console.log(error)}
        onTakePhoto={dataUrl => console.log(dataUrl)}
      />
    </div>
  );
};

export default CamBox;
