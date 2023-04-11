import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import AngularImg from "./images/angular.jpg";
import BootstrapImg from "./images/bootstrap5.png";
import CSharpImg from "./images/ccsharp.png";
import KompleWebImg from "./images/kompleweb.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={AngularImg}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis minus, voluptatem, doloribus magni, a id non accusamus error modi pariatur iste et omnis sequi illum ipsa quod perferendis repellat? "
              />
            </div>
            <div className="column">
              {" "}
              <Course
                image={BootstrapImg}
                title="MVC"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis minus, voluptatem, doloribus magni, a id non accusamus error modi pariatur iste et omnis sequi illum ipsa quod perferendis repellat? "
              />
            </div>
            <div className="column">
              <Course
                image={CSharpImg}
                title="Vue"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis minus, voluptatem, doloribus magni, a id non accusamus error modi pariatur iste et omnis sequi illum ipsa quod perferendis repellat? "
              />
            </div>
            <div className="column">
              <Course
                image={KompleWebImg}
                title="React"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis minus, voluptatem, doloribus magni, a id non accusamus error modi pariatur iste et omnis sequi illum ipsa quod perferendis repellat? "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
