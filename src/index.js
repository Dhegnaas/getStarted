import { createRoot } from "react-dom/client";

let year = 2025;
let greeting = 
    <div>
        <h1 className="tittle">Tittle</h1>
        <p style={{
            backgroundColor: "green",
            padding: 10,
            fontSize: 25
        }}>Hello from react new {year}</p>
        <input type="text" placeholder="enter your name"/>
    </div>
const container = document.getElementById("root");
const root = createRoot(container);

root.render(greeting);