// react tools
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'tailwindcss/tailwind.css';
import ErrorPage from 'components/ErrorPage';
import App from './App';
import NavBar from 'components/NavBar';
import About from 'components/About';
import Home from 'components/Home';
export const baseUrl = '/';
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
    ],
  },
]);
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<RouterProvider router={router} />);
}
