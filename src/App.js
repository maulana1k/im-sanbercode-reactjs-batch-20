import React from "react";
import Main from './views/Main'
import {UserProvider} from './component/UserContext'
function App() {
  
  return (
  	<UserProvider>
	  	<div className="App">
		<Main/>    
	  	</div>
  	</UserProvider>
  );
}

export default App;
