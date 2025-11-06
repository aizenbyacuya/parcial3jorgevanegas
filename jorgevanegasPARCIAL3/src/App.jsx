import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");
  const [unidadOrigen, setUnidadOrigen] = useState("kg");
  const [unidadDestino, setUnidadDestino] = useState("g");
  const [resultado, setResultado] = useState("");

  const convertir = () => {
    const peso = parseFloat(valor);
    if (isNaN(peso)) {
      setResultado("Ingrese un número válido");
      return;
    }

    let resultadoFinal = peso;

    // Primero convertimos todo a kilogramos
    switch (unidadOrigen) {
      case "g":
        resultadoFinal = peso / 1000;
        break;
      case "lb":
        resultadoFinal = peso * 0.453592;
        break;
      case "oz":
        resultadoFinal = peso * 0.0283495;
        break;
      default:
        break;
    }

    // Luego de kilogramos a la unidad destino
    switch (unidadDestino) {
      case "g":
        resultadoFinal *= 1000;
        break;
      case "lb":
        resultadoFinal /= 0.453592;
        break;
      case "oz":
        resultadoFinal /= 0.0283495;
        break;
      default:
        break;
    }

    setResultado(`${resultadoFinal.toFixed(2)} ${unidadDestino}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">
        Convertidor de Peso - Jorge Luis Vanegas Carpaño (0702022)
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <input
          type="number"
          placeholder="Ingrese el valor"
          className="border p-2 rounded w-full mb-3"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <div className="flex gap-2 mb-3">
          <select
            className="border p-2 rounded flex-1"
            value={unidadOrigen}
            onChange={(e) => setUnidadOrigen(e.target.value)}
          >
            <option value="kg">Kilogramos</option>
            <option value="g">Gramos</option>
            <option value="lb">Libras</option>
            <option value="oz">Onzas</option>
          </select>

          <select
            className="border p-2 rounded flex-1"
            value={unidadDestino}
            onChange={(e) => setUnidadDestino(e.target.value)}
          >
            <option value="kg">Kilogramos</option>
            <option value="g">Gramos</option>
            <option value="lb">Libras</option>
            <option value="oz">Onzas</option>
          </select>
        </div>

        <button
          onClick={convertir}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Convertir
        </button>

        {resultado && (
          <p className="mt-4 text-xl font-semibold text-gray-700">
            Resultado: {resultado}
          </p>
        )}
      </div>

      <footer className="mt-6 text-sm text-gray-700">
        © 2025 - Proyecto de React con TailwindCSS
      </footer>
    </div>
  );
}
