const Navi = ( {cameraPower} ) => {
  return(
    <div id="navi">
      <div id="naviContent">
        <div onClick={cameraPower}>CAM</div>
        <div>LOAD</div>
        <div>btn</div>
        <div>btn</div>
      </div>
    </div>
  );
};
export default Navi;
