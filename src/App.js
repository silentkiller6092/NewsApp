import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <section className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={1}
                    pageSize={10}
                    category="general"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={2}
                    pageSize={10}
                    category="sport"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={3}
                    pageSize={10}
                    category="entertainment"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={10}
                    pageSize={10}
                    category="business"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={5}
                    pageSize={10}
                    category="health"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={6}
                    pageSize={10}
                    category="science"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={7}
                    pageSize={10}
                    category="technology"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />

              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key={8}
                    pageSize={10}
                    category="health"
                    apikey="905f0d279a764013a7a2d83434e68a30"
                  />
                }
              />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}
