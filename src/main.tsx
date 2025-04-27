import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MessageProvider } from './context/message.context.tsx';
import { NotifyProvider } from './context/notifycation.context.tsx';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
      <NotifyProvider>
        <RouterProvider router={router} />
      </NotifyProvider>
    </MessageProvider>
  </StrictMode>,
)
