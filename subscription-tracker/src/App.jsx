import Home from "./pages/Home"
import Login from "./pages/Login"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase"
function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="bg-zinc-950 h-screen text-neutral-200">
      {user ? <Home /> : <Login/> }
    </div>
  )
}

export default App
