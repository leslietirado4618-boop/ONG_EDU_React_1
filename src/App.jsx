import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CienciasNaturales from "./pages/CienciasNaturales.jsx";
import EspanolPreparatoria from "./pages/EspanolPreparatoria.jsx";
import EspanolPrimaria from "./pages/EspanolPrimaria.jsx";
import EspanolSecundaria from "./pages/EspanolSecundaria.jsx";
import FisicaGradoSuperior from "./pages/FisicaGradoSuperior.jsx";
import FisicaPreparatoria from "./pages/FisicaPreparatoria.jsx";
import GradoSuperior from "./pages/GradoSuperior.jsx";
import HistoriaSecundaria from "./pages/HistoriaSecundaria.jsx";
import InglesNivelSuperior from "./pages/InglesNivelSuperior.jsx";
import InglesPreparatoria from "./pages/InglesPreparatoria.jsx";
import Inicio from "./pages/Inicio.jsx";
import MagnitudesFisica from "./pages/MagnitudesFisica.jsx";
import MatematicasPrimaria from "./pages/MatematicasPrimaria.jsx";
import MatematicasSecundaria from "./pages/MatematicasSecundaria.jsx";
import NumerosNaturales from "./pages/NumerosNaturales.jsx";
import PalabrasAgudasGravesEsdrujulas from "./pages/PalabrasAgudasGravesEsdrujulas.jsx";
import Parafrasis from "./pages/Parafrasis.jsx";
import Preparatoria from "./pages/Preparatoria.jsx";
import Primaria from "./pages/Primaria.jsx";
import QuimicaGradoSuperior from "./pages/QuimicaGradoSuperior.jsx";
import Respuestasformularioayuda from "./pages/Respuestasformularioayuda.jsx";
import Secundaria from "./pages/Secundaria.jsx";
import VerbosModales_InglesPrep from "./pages/VerbosModales_InglesPrep.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/ciencias_naturales" element={<CienciasNaturales />} />
        <Route path="/espanol_preparatoria" element={<EspanolPreparatoria />} />
        <Route path="/espanol_primaria" element={<EspanolPrimaria />} />
        <Route path="/espanol_secundaria" element={<EspanolSecundaria />} />
        <Route path="/fisica_grado_superior" element={<FisicaGradoSuperior />} />
        <Route path="/fisica_preparatoria" element={<FisicaPreparatoria />} />
        <Route path="/grado_superior" element={<GradoSuperior />} />
        <Route path="/historia_secundaria" element={<HistoriaSecundaria />} />
        <Route path="/ingles_nivel_superior" element={<InglesNivelSuperior />} />
        <Route path="/ingles_preparatoria" element={<InglesPreparatoria />} />
        <Route path="/magnitudes_fisica" element={<MagnitudesFisica />} />
        <Route path="/matematicas_primaria" element={<MatematicasPrimaria />} />
        <Route path="/matematicas_secundaria" element={<MatematicasSecundaria />} />
        <Route path="/numeros_naturales" element={<NumerosNaturales />} />
        <Route path="/palabras_agudas_graves_esdrujulas" element={<PalabrasAgudasGravesEsdrujulas />} />
        <Route path="/Parafrasis" element={<Parafrasis />} />
        <Route path="/preparatoria" element={<Preparatoria />} />
        <Route path="/primaria" element={<Primaria />} />
        <Route path="/quimica_grado_superior" element={<QuimicaGradoSuperior />} />
        <Route path="/respuestasformularioayuda" element={<Respuestasformularioayuda />} />
        <Route path="/secundaria" element={<Secundaria />} />
        <Route path="/verbos_modales_inglesprep" element={<VerbosModales_InglesPrep />} />
      </Routes>
    </BrowserRouter>
  );
}
