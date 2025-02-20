import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";
import FormComponent from "./components/FormComponent";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/class"
            element={
              <>
                <ClassComponent title="Sono un bellissimo ClassComponent" color="palevioletred" />
                <ClassComponent title="Sono un bellissimo ClassComponent" />
              </>
            }
          />
          <Route path="/functional" element={<FunctionalComponent title="Sono un functional component" />} />
          <Route path="/form" element={<FormComponent title="Form Component" />} />
          <Route path="/fetch" element={<FetchComponent />} />
          <Route path="/dynamic/:lat/:lon" element={<Dynamic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
