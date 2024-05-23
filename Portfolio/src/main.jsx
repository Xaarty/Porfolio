import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom/client";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Location from "./routes/projet1.jsx";

import store from "./store.js";

import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./styles/main.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/location-immobiliere",
        element: <Location />,
      },
    ],
  },
]);


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }

    return this.props.children;
  }
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundary errorElement={<Error />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </Provider>
);