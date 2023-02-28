import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/cadastro',
    element: <RegisterScreen />
  },
  {
    path: '/esqueceu-senha',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/alterar-senha',
    element: <ResetPasswordScreen />
  }
]
