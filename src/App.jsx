import React from "react";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import DeviceList from "./components/DeviceList/DeviceList";

const App = () => {
  return (
    <div className='app'>
      <MyAppBar />
      <DeviceList />
    </div>
  );
};

export default App;
