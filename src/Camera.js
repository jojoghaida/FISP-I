
import Camera, { DEVICE, FACING_MODE, PLACEMENT } from 'react-camera-ios';

const constraints = { audio: false, video: { width: 1280, height: 720 } };

const CamBox = ( ) => {
  return(
    <div>
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
