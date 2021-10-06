import React from "react";
import DynamicRemoteContainer from "./hooks/DynamicRemoteContainer";
import AppWrapper from "./App.styles";

const App = () => (
  <AppWrapper>
    <h1>Developer Profiles</h1>
    <h3>Built With Micro Frontends</h3>
    <hr />
    <div className="profile-container">
      <DynamicRemoteContainer
        componentProps={{}}
        url="http://localhost:3003/remoteEntry.js"
        scope="DevProfileOne"
        module="./Profile"
      />
      <DynamicRemoteContainer
        componentProps={{}}
        url="http://localhost:3001/remoteEntry.js"
        scope="DevProfileTwo"
        module="./Profile"
      />
    </div>
  </AppWrapper>
);

export default App;
