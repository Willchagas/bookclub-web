import { LoginScreen, RegisterScreen } from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/cadastro',
    element: <RegisterScreen />
  }
]
