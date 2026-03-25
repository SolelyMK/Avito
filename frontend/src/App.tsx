import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import PageAdvertisements from './pages/PageAdvertisements';
import PageEditItem from './pages/PageEditItem';
import PageItemView from './pages/PageItemView';

const router = createBrowserRouter([
  { path: "/ads", Component: PageAdvertisements },
  { path: "/ads/:id", Component: PageItemView },
  { path: "/ads/:id/edit", Component: PageEditItem }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
