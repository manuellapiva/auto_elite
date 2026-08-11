import {
  FaTachometerAlt,
  FaGasPump,
  FaCog,
  FaArrowRight
} from "react-icons/fa";
import carro1 from '../assets/carro1.jpg'
import carro2 from '../assets/carro2.webp'
import carro3 from '../assets/carro3.jpg'
import carro4 from '../assets/carro4.avif'
import carro5 from '../assets/carro5.jfif'
import carro6 from '../assets/carro6.jpg'
import carro7 from '../assets/carro7.avif'
import carro8 from '../assets/carro8.avif'

function Produtos() {
  const veiculos = [
    {
      brand: "BMW",
      name: "BMW M4 Competition",
      price: "$119,900",
      image: carro1,   
      mileage: "1,200 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "NEW"
    },
    {
      brand: "PORSCHE",
      name: "2024 Porsche 911 Turbo S",
      price: "$224,900",
      image:carro2,
      mileage: "2,100 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "FEATURED"
    },
    {
      brand: "MERCEDES-BENZ",
      name: "2024 AMG GT 63 S",
      price: "$184,500",
      image:carro3,
      mileage: "890 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "NEW"
    },
    {
      brand: "AUDI",
      name: "2024 RS7 Sportback",
      price: "$131,900",
      image:carro4,
      mileage: "3,600 mi",
      transmission: "Automático",
      fuel: "Hybrid",
      tag: "FEATURED"
    },
    {
      brand: "LAMBORGHINI",
      name: "2023 Urus Performante",
      price: "$267,000",
      image: carro5,
      mileage: "530 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "NEW"
    },
    {
      brand: "FERRARI",
      name: "2022 F8 Tributo",
      price: "$329,000",
      image:carro6,
      mileage: "3,900 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "FEATURED"
    },
    {
      brand: "TESLA",
      name: "2024 Model S Plaid",
      price: "$109,990",
      image:carro7,
      mileage: "2,100 mi",
      transmission: "Automático",
      fuel: "Electric",
      tag: "NEW"
    },
    {
      brand: "ROLLS-ROYCE",
      name: "2024 Ghost Extended",
      price: "$418,000",
      image:carro8,
      mileage: "300 mi",
      transmission: "Automático",
      fuel: "Gasolina",
      tag: "NEW"
    }
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-5">
          <p className="text-xs uppercase tracking-widest text-gray-400">
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {veiculos.map((vehicle, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#292929]
              hover:border-red-600 transition duration-300"
            >

              <div className="relative h-48 overflow-hidden">

                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-3">

                <p className="text-[9px] text-red-500 font-bold tracking-wider mb-1">
                  {vehicle.brand}
                </p>

                <h2 className="text-sm font-bold text-white mb-3">
                  {vehicle.name}
                </h2>

                <div className="grid grid-cols-3 bg-[#191919] mb-4">

                  <div className="flex flex-col items-center py-3 border-r border-[#292929]">
                    <FaTachometerAlt className="text-gray-500 text-xs mb-1" />
                    <span className="text-[9px] text-gray-400">
                      {vehicle.mileage}
                    </span>
                  </div>

                  <div className="flex flex-col items-center py-3 border-r border-[#292929]">
                    <FaCog className="text-gray-500 text-xs mb-1" />
                    <span className="text-[9px] text-gray-400">
                      {vehicle.transmission}
                    </span>
                  </div>

                  <div className="flex flex-col items-center py-3">
                    <FaGasPump className="text-gray-500 text-xs mb-1" />
                    <span className="text-[9px] text-gray-400">
                      {vehicle.fuel}
                    </span>
                  </div>

                </div>

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-[9px] text-gray-500 uppercase">
                      Price
                    </p>

                    <p className="text-base font-bold text-red-500">
                      {vehicle.price}
                    </p>
                  </div>

                  <button
                    className="flex items-center gap-2 border border-[#333]
                    px-3 py-2 text-[9px] font-bold uppercase
                    hover:bg-red-600 hover:border-red-600
                    transition duration-300"
                  >
                    Details
                    <FaArrowRight />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Produtos;