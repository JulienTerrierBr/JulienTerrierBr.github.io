import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ou tes propres icônes

const slides = [
  {
    title: "Coût pour l'État",
    text: "Chaque étudiant à l'étranger coûte à la collectivité en termes de bourses, d’exonérations et d’aides indirectes.",
    image: "/images/destination_etud_fr.jpg",
  },
  {
    title: "Fuite des cerveaux",
    text: "De nombreux étudiants ne reviennent pas, privant le pays de talents formés localement.",
    image: "/images/10_pays_acceuil_erasmus.jpg",
  },
  {
    title: "Investissement rentable ?",
    text: "Certains experts estiment que la mobilité, bien encadrée, peut au contraire représenter un atout économique à long terme.",
    image: "/images/10_pays_origin_erasmus.jpg",
  },
];

export default function ImpactSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <div className="relative bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{slide.title}</h2>
      <img
        src={slide.image}
        alt={slide.title}
        className="mx-auto mb-4 rounded shadow max-h-64 object-cover"
      />
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">{slide.text}</p>
      <div className="flex justify-between max-w-sm mx-auto">
        <button onClick={prev} className="text-blue-600 hover:text-blue-800">
          <ChevronLeft size={32} />
        </button>
        <button onClick={next} className="text-blue-600 hover:text-blue-800">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}