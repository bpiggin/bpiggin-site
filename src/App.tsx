import "./App.css";
import "./index.css";
import Link from "./components/Link/Link";
import Particles from "./components/Particles/Particles";

function App() {
  return (
    <div className="app">
      <div className="cardContainer">
        <div className="card">
          <h1>Benjamin Piggin</h1>
          <hr />
          <p>
            Developer @ <Link url="https://www.theodo.co.uk/">Theodo UK</Link>.
            <br />
            Two years of full-stack experience.
            <br />
            TS • React • React Native • Serverless
          </p>
          <h3>Made</h3>
          <Link url="https://github.com/bpiggin/mindful-timer-app">
            Mindful Timer App
          </Link>
          <h3>Wrote</h3>
          <Link url="https://blog.theodo.com/2020/06/build-accordion-list-react-native/">
            Build an Animated Accordion List in React Native
          </Link>
          <h3>Spoke</h3>
          <Link url="https://youtu.be/9OatvryqJvY?t=6405">
            Improving the performance of your serverless application
          </Link>
          <h3>Attained</h3>
          <p>AWS Cloud Practitioner (2020)</p>
          <hr />
          <p>
            <Link url="https://github.com/bpiggin">github</Link> •{" "}
            <Link url="https://www.linkedin.com/in/benjamin-piggin/">
              linkedin
            </Link>
          </p>
        </div>
      </div>
      <Particles />
    </div>
  );
}

export default App;
