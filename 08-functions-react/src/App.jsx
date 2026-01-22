import React from "react";

const App = () => {
  function newfnc(value) {
    if(value>200){
    console.log("winner",value);
    }else{
      console.log("losser")
    }
  }

  return (
    <div
      id="page"
      onWheel={(elem) => {
        newfnc(elem.deltaY);
      }}
    >
      <div id="page1"></div>
      <div id="page2"></div>
      <div id="page3"></div>
    </div>
  );
};

export default App;
