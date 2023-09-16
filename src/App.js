import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = { progress: 0 };
  APIKEY = "905f0d279a764013a7a2d83434e68a30";
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
                    apikey={this.APIKEY}
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
