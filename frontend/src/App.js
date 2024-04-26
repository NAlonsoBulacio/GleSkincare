import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LandingPageBundle from './pages/LandingPageBundle/LandingPageBundle';
function App() {


  return (
    <div className="App font-sans-200">
      <Route exact path="/cream" component={LandingPage} />
      <Route exact path="/bundle" component={LandingPageBundle} />
    </div>
  );
}

export default App;
