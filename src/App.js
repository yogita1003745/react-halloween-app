import "./App.css";
import Home1 from "./home/Home1";
import Snowfall from "react-snowfall";
import { useState } from "react";

function App() {
  const [invite, setInvite] = useState(false);

  // const snowflake1 = document.createElement("img");
  // snowflake1.src = "/star.png";
  // const images = [snowflake1];

  const handleBack = (show) => {
    setInvite(show);
  };

  return (
    <div>
      {/* <Home /> */}
      {invite ? (
        <Home1 onBack={handleBack} />
      ) : (
        <div
          className="min-h-screen flex items-center justify-center bg-black bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("/One.avif")',
          }}
        >
          <Snowfall
            style={{
              position: "fixed",
            }}
          />
          <div >
            <button
              className="ml-56"
              onClick={() => {
                setInvite(true);
              }}
            >
              <img
                src="./rsv.png"
                alt="Button Image"
                className="w-2/3 h-2/3 animated-image"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
