import { Route, Routes } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"
import TransactionsPage from "../pages/TransactionsPage"
import PrivateRoute from "../components/PrivateRoute"
import PublicRoute from "../components/PublicRoute"


function AppRoutes() {
  
  return (

    <Routes >

      <Route element={ <PublicRoute /> } >
        <Route path="/users/login" element={ <LoginPage /> } />
        <Route path="/users/sign-up" element={ <LoginPage /> } />
      </Route>

      //! Public 
      //! Private pasará primero por PrivateRoute
      <Route element={ <PrivateRoute /> } >
        <Route path="/dashboard" element={<DashboardPage /> } />
        <Route path="/transactions" element={ <TransactionsPage /> } />
      </Route>

      //TODO 404 page
      <Route path="*" element={"No existe"} />


    </Routes>

  )
}

export default AppRoutes