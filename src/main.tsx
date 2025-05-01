import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/auth/LoginPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MessageProvider } from './context/message.context.tsx';
import { NotifyProvider } from './context/notifycation.context.tsx';
import LayoutAdmin from './layouts/layout.admin.tsx';
import DashBoard from './pages/admin/dashboard.tsx';
import LayoutClient from './layouts/layout.client.tsx';
import ClientPage from './pages/client/UserPage.tsx';
import { AppProvider } from './context/app.context.tsx';
import ProtectedRoute from './middleware/Auth.middleware.tsx';
import LoginMiddleWare from './middleware/Login.middleware.tsx';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        index: true,
        element: <ClientPage />
      }
    ]
  },
  {
    path: "/login",
    element: (
      <LoginMiddleWare>
        <LoginPage />
      </LoginMiddleWare>
    )
  },
]);

createRoot(document.getElementById('root')!).render(
  <MessageProvider>
    <NotifyProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </NotifyProvider>
  </MessageProvider>
)
