const Navi = ( {cameraPower} ) => {
  return(
    <div id="navi">
      <div id="naviContent">
        <div onClick={cameraPower}>CAM</div>
        <div>LOAD</div>
        <div>PHOTOS</div>
        <div>VIEW</div>
      </div>
    </div>
  );
};
export default Navi;
