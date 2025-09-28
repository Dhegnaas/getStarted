import { createRoot } from "react-dom/client";

const greeting = <h1>Hello from react!</h1>

const container = document.getElementById("root");
const root = createRoot(container);

root.render(greeting);