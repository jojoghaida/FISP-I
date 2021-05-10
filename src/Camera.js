import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';
import 'react-camera-ios/build/styles.css';
const constraints = { audio: false, video: { width: 1280, height: 720 } };

const CamBox = ( ) => {
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
