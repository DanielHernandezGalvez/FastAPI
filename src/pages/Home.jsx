import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Locución Profesional para tus Proyectos 🎙️
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        ¿Necesitas una voz profesional para tu anuncio, video o spot publicitario?  
        Ofrezco locuciones de alta calidad con entrega en 24 horas.  
      </p>
      <Link to="/paquetes">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition">
          Ver Paquetes 🎧
        </button>
      </Link>
    </div>
  );
}

export default Home;
