import { Pacientes } from "../controllers/pacienteController";
import Home from "./pages/Home";
import '../styles/main.scss';



const App = () => {
  new Pacientes()

  return (
    <>
      <Home />
    </>
  )
}



export default App;

