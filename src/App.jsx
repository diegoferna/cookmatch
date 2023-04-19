import { Outlet } from "react-router-dom"
import Header from "./components/core/Header"
import MenuNavigation from "./components/core/Menu"


function App() {
  return (
    <div className="h-screen">
      <MenuNavigation />
      <Header />
      <Outlet />
    </div>
  )
}

export default App
