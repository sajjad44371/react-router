import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Posts postsPromise={postsPromise}></Posts>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <div>Welcome to about section</div>,
  },
  {
    path: "/blogs",
    element: <div>Blogs here</div>,
  },
  {
    path: "/app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
