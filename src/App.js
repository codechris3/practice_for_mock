import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import PostDetail from "./PostDetail";

function Home() {
  return <p>Home</p>;
}

function NoMatch() {
  const location = useLocation();

  return (
    <h3>
      404 Not Found!<code>{location.pathname}</code>
    </h3>
  );
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/">Home</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/post/${id}`} data-testid={`post-${id}`}>
              Post{id}
            </Link>
          </div>
        ))}
      {/* // Setup routes with route paramaters as needed */}
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/posts/:postId/comments">
          <PostDetail />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
