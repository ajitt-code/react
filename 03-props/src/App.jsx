import React from "react";
import Card from './components/Card.jsx'
const App = () => {
  return <div className="parent">
    <Card name="ajit sanap" age="21" img="https://plus.unsplash.com/premium_photo-1752865066686-a58cb4d5b966?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card name="amar sanap" age="18" img="https://images.unsplash.com/photo-1748723594345-a32f480a3db7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card name="vikas sanap" age="27" img="https://images.unsplash.com/photo-1759549567944-bb5923888826?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  </div>;
};

export default App;
