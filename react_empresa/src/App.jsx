import NavBar from "./Components/NavBar"
import { Route } from "wouter"
import PagePrincipal from "./Pages/PagePrincipal"
import PageLogin from "./Pages/PageLogin"
import PageRegister from "./Pages/PageRegister"
import PageActualizarEmpresa from "./Pages/PageActualizarEmpresa"
import PageEmpresa from "./Pages/PageEmpresa"
import PageCupon from "./Pages/PageCupon"

function App() {


  return (
    <>

    <NavBar />
    <Route path="/" component={PageEmpresa} />
    <Route path="/home" component={PageEmpresa} />
    <Route path="/login" component={PageLogin} />
    <Route path="/register" component={PageRegister} />
    <Route path="/actualizarEmpresa" component={PageActualizarEmpresa} />
    <Route path="/cuponEmpresa" component={PageCupon} />
    </>
  )
}

export default App
