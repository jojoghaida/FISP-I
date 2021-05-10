import Camera from './Camera';

const Ui = ( ) => {
  return(
    <div id="Ui">
      <div id="head">
        <div>
          Project Name
        </div>
        <div id="sectionAnnot">
          Section
        </div>
      </div>
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
