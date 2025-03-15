import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const paquetes = [
  {
    id: 1,
    titulo: "Locución de 20 segundos",
    descripcion: "Ideal para anuncios cortos, intros y promocionales.",
    precio: "1,000 MXN",
    duracion: "20s",
  },
  {
    id: 2,
    titulo: "Locución de 1 minuto",
    descripcion: "Perfecto para spots publicitarios o contenido más detallado.",
    precio: "2,000 MXN",
    duracion: "1m",
  },
];

function Paquetes() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Elige tu Paquete 🎙️
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {paquetes.map((paquete) => (
          <motion.div
            key={paquete.id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform transition hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: paquete.id * 0.2 }}
          >
            <h2 className="text-2xl font-bold">{paquete.titulo}</h2>
            <p className="text-gray-300 mt-2">{paquete.descripcion}</p>
            <p className="text-xl font-semibold mt-4">{paquete.precio}</p>
            <Link to={`/comprar/${paquete.duracion}`}>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
                Comprar
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      <Link to="/">
        <button className="mt-8 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition">
          Volver a Inicio
        </button>
      </Link>
    </div>
  );
}

export default Paquetes;
