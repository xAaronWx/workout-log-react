import React from "react";
import Sitebar from "./home/navbar";

function App() {
  const [sessionToken, setSessionToken] = useState(""); //1

  useEffect(() => {
    //2
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    //3
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  //render method is down here

  return (
    <div>
      <Sitebar />
    </div>
  );
}

export default App;
