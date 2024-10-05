import { useState } from "react";

function App() {
  let [color, setColor] = useState("#9ca3af");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* button Number - 1 */}
          <button
            onClick={() => setColor("#ff9999")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#ff9999" }}
          >
            Red
          </button>

          {/* button Number - 2 */}
          <button
            onClick={() => setColor("#99ffc7")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#99ffc7" }}
          >
            Green
          </button>

          {/* button Number - 3 */}
          <button
            onClick={() => setColor("#ffdd00")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#ffdd00" }}
          >
            Yellow
          </button>

          {/* button Number - 4 */}
          <button
            onClick={() => setColor("#00b2ff")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#00b2ff" }}
          >
            Blue
          </button>

          {/* button Number - 5 */}
          <button
            onClick={() => setColor("#00ffc8")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#00ffc8" }}
          >
            Sky
          </button>

          {/* button Number - 6 */}
          <button
            onClick={() => setColor("#e5c4b9")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#e5c4b9" }}
          >
            Brown
          </button>

          {/* button Number - 7 */}
          <button
            onClick={() => setColor("#e0e8be")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#e0e8be" }}
          >
            Skin
          </button>

          {/* button Number - 8 */}
          <button
            onClick={() => setColor("#c8a4e9")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#c8a4e9" }}
          >
            Purple
          </button>

          {/* button Number - 9 */}
          <button
            onClick={() => setColor("#999999")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#999999" }}
          >
            Gray
          </button>

          {/* button Number - 10 */}
          <button
            onClick={() => setColor("#99bbff")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#99bbff" }}
          >
            Light-Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
