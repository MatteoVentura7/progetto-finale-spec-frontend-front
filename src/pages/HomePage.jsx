import { useEffect, useState } from "react";
import Jumbo from "../components/Jumbo";

export default function HomePage() {
  const [products, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stato per filtro e ordinamento
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Caricamento...</div>;

  // Ottieni categorie uniche
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Filtro per categoria
  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Ordinamento
  const sorted = [...filtered].sort((a, b) => {
    const aField = a[sortField]?.toLowerCase() || "";
    const bField = b[sortField]?.toLowerCase() || "";
    if (aField < bField) return sortOrder === "asc" ? -1 : 1;
    if (aField > bField) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <Jumbo />
      <h1 className="mt-10 text-4xl text-center font-bold">
        LE NOSTRE ETICHETTE
      </h1>

      {/* Filtro e ordinamento */}
      <div className="flex justify-center gap-4 mt-8 mb-8">
        {/* Filtro categoria */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Campo ordinamento */}
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="title">Titolo</option>
          <option value="category">Categoria</option>
        </select>

        {/* Ordine */}
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="border rounded px-2 py-1"
        >
          {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>

      <ul className="flex flex-wrap justify-center gap-10 mt-10">
        {sorted.map((item) => (
          <li key={item.id}>
            <img
              src={`public/${item.title}.png`}
              alt=""
              className="h-152 w-64 hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg cursor-pointer object-fill"
            />
          </li>
        ))}
      </ul>
      <div
        className="bg-[#EBEAE6] mt-10 grid grid-cols-2 gap-8 items-center px-10 py-10"
        id="about"
      >
        {/* Colonna Sinistra */}
        <div>
          <h2 className=" pb-8 text-center text-amber-800">L'AZIENDA</h2>
          <img
            className="w-44 mb-4 mx-auto"
            src="public/logo-boolwine.png"
            alt="Logo Boolwine"
          />
          <p className="text-center text-gray-700">
            BoolShop nasce nel 2025, l’anno in cui Matteo ha preso <br />
            il timone dell’azienda di famiglia, legata sin dal 1890 alla <br />
            coltivazione della vite.
          </p>
        </div>
        {/* Colonna Destra */}
        <div className="flex justify-center">
          <img
            className="w-132 rounded-lg shadow"
            src="public\about.png"
            alt="Enoteca"
          />
        </div>
      </div>
    </div>
  );
}
