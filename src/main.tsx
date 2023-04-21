// react tools
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'tailwindcss/tailwind.css';
import ErrorPage from 'components/ErrorPage';
//components
import App from './App';
import About from 'components/About';
import Projects from 'components/Projects';
import Home from 'components/Home';
import { StrictMode } from 'react';
import { baseUrl } from 'utils/url';
const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: baseUrl + '',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: baseUrl + 'about',
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: baseUrl + 'projects',
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
