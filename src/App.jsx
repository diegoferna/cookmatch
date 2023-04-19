
import { DatabaseContextProvider } from "./context"
import Home from "./page/Home"

function App() {
  
  return (
    <div>
      <DatabaseContextProvider>
        <Home />
      </DatabaseContextProvider>
    </div>
  )
}

export default App
