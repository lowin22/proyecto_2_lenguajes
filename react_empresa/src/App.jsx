import NavBar from "./Components/NavBar"
import { Route } from "wouter"
import PagePrincipal from "./Pages/PagePrincipal"
import PageRegisterPromotion from "./Pages/PageRegisterPromotion"
import PageCuponDetail from "./Pages/PageCuponDetail"
import PageLogin from "./Pages/PageLogin"
import PageRegister from "./Pages/PageRegister"
import PageUpdateCupon from "./Pages/PageUpdateCupon"
import PageUpdatePromocion from "./Pages/PageUpdatePromocion"
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
    <Route path="/actualizarEmpresa" component={PageActualizarEmpresa} />
    <Route path="/cuponEmpresa" component={PageCupon} />
    <Route path="/viewpromotion/:id" component={PageCuponDetail} />
    <Route path="/registerpromotion/:id" component={PageRegisterPromotion} />
    <Route path="/editarcupon/:id" component={PageUpdateCupon} />
    <Route path="/editardescuento/:id" component={PageUpdatePromocion} />
    </>
  )
}

export default App
