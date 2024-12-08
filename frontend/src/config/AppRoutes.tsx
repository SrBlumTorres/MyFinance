import { Route, Routes } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"


function AppRoutes() {
  return (

    <Routes >
        //! Public paths
        <Route />
        //! Private paths
        <Route path="/" element={ <DashboardPage /> } />
        <Route path="/transactions" element={ <DashboardPage /> } />
        <Route path="/users/login" element={ <LoginPage /> } />
        <Route path="" />
        <Route path="" />
    </Routes>

  )
}

export default AppRoutes