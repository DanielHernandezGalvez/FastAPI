import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Compra() {
  const { duracion } = useParams();
  const paquetes = {
    "20s": { titulo: "Locución de 20 segundos", precio: "1,000 MXN" },
    "1m": { titulo: "Locución de 1 minuto", precio: "2,000 MXN" },
  };
  const paquete = paquetes[duracion] || paquetes["20s"];

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [guion, setGuion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost/api/crear_pago.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, guion, duracion }),
    });

    const data = await response.json();
    if (data.init_point) {
      window.location.href = data.init_point; // Redirigir a Mercado Pago
    } else {
      alert("Hubo un error al generar el pago.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Completa tu Compra 🎙️
      </motion.h1>

      <motion.div
        className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">{paquete.titulo}</h2>
        <p className="text-xl font-semibold mt-2">{paquete.precio}</p>

        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 rounded-lg bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            placeholder="Tu Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Ingresa tu guion aquí..."
            value={guion}
            onChange={(e) => setGuion(e.target.value)}
            rows="4"
            className="p-2 rounded-lg bg-gray-700 text-white"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Pagar con Mercado Pago 💳
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Compra;
