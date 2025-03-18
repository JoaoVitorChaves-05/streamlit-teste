import { useState, useEffect } from "react";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App({ args }) {
  const [count, setCount] = useState(args.count || 0); // Recebe valor inicial do Streamlit

  useEffect(() => {
    Streamlit.setComponentValue(count); // Envia o valor do contador para o Streamlit
    Streamlit.setFrameHeight(); // Ajusta a altura do componente dinamicamente
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// Envolver com conexão do Streamlit
export default withStreamlitConnection(App);
