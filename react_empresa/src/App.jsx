import NavBar from "./Components/NavBar"
import { Route } from "wouter"
import PagePrincipal from "./Pages/PagePrincipal"
import PageLogin from "./Pages/PageLogin"
import PageRegister from "./Pages/PageRegister"
import PageActualizarEmpresa from "./Pages/PageActualizarEmpresa"

function App() {


  return (
    <>

    <NavBar />
    <Route path="/" component={PagePrincipal} />
    <Route path="/home" component={PagePrincipal} />
    <Route path="/login" component={PageLogin} />
    <Route path="/register" component={PageRegister} />
    <Route path="/actualizarEmpresa" component={PageActualizarEmpresa} />
    
    </>
  )
}

export default App
