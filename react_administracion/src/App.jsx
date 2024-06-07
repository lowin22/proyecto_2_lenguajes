import NavBar from "./Components/NavBar"
import { Route } from "wouter"
import PagePrincipal from "./Pages/PagePrincipal"
import PageLogin from "./Pages/PageLogin"
import PageRegister from "./Pages/PageRegister"
import PageEmpresa from "./Pages/PageEmpresa"
import PageCupon from "./Pages/PageCupon"
import RegisterCuponaAllOptions from "./Pages/RegisterCuponaAllOptions"
import PageRegisterPromotion from "./Pages/PageRegisterPromotion"
import PageCuponDetail from "./Pages/PageCuponDetail"
import PageEditarEmpresa from "./Pages/PageEditarEmpresa"
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
    <Route path="/registrarcupon" component={RegisterCuponaAllOptions} />
    <Route path="/registerpromotion/:id" component={PageRegisterPromotion} />
    <Route path="/viewpromotion/:id" component={PageCuponDetail} />
    <Route path="/editarempresa/:id" component={PageEditarEmpresa} />


    
    </>
  )
}

export default App
