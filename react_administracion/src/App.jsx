import NavBar from "./Components/NavBar"
import { Route } from "wouter"
import PagePrincipal from "./Pages/PagePrincipal"
import PageLogin from "./Pages/PageLogin"
import PageRegister from "./Pages/PageRegister"
import PageEmpresa from "./Pages/PageEmpresa"
import PageCupon from "./Pages/PageCupon"

function App() {


  return (
    <>

    <NavBar />
    <Route path="/" component={PagePrincipal} />
    <Route path="/home" component={PagePrincipal} />
    <Route path="/login" component={PageLogin} />
    <Route path="/register" component={PageRegister} />
    <Route path="/empresa/:id" component={PageEmpresa} />
    <Route path="/cupon/:id" component={PageCupon} />

    
    </>
  )
}

export default App
