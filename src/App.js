import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [progress, setProgress] = useState(0);
  // let state = { progress: 0 };
  let APIKEY = "905f0d279a764013a7a2d83434e68a30";

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <section className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key={1}
                  pageSize={10}
                  category="general"
                  apikey={APIKEY}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key={2}
                  pageSize={10}
                  category="sport"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key={3}
                  pageSize={10}
                  category="entertainment"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key={10}
                  pageSize={10}
                  category="business"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={5}
                  pageSize={10}
                  category="health"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key={6}
                  pageSize={10}
                  category="science"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key={7}
                  pageSize={10}
                  category="technology"
                  apikey={APIKEY}
                />
              }
            />

            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key={8}
                  pageSize={10}
                  category="health"
                  apikey={APIKEY}
                />
              }
            />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
};
export default App;
