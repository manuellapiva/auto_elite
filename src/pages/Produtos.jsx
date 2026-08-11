import { BsArrowRightShort, BsFuelPump, BsGear  } from "react-icons/bs";

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
      price: "R$900.000",
      image: carro1,   
      transmission: "Automático",
      fuel: "Gasolina",
    },
    {
      brand: "PORSCHE",
      name: "Porsche 911 Turbo S",
      price: "R$2,1 mi",
      image:carro2,
      transmission: "Automático",
      fuel: "Gasolina",
    },
    {
      brand: "MERCEDES-BENZ",
      name: "AMG GT 63 S",
      price: "R$2 mi",
      image:carro3,
      transmission: "Automático",
      fuel: "Gasolina",
    },
    {
      brand: "AUDI",
      name: "RS7 Sportback",
      price: "R$340.000",
      image:carro4,
      transmission: "Automático",
      fuel: "Híbrido",
    },
    {
      brand: "LAMBORGHINI",
      name: "Urus Performante",
      price: "R$4,3 mi",
      image: carro5,
      transmission: "Automático",
      fuel: "Gasolina",
    },
    {
      brand: "FERRARI",
      name: "F8 Tributo",
      price: "R$3,2 mi",
      image:carro6,
      transmission: "Automático",
      fuel: "Gasolina",
    },
    {
      brand: "TESLA",
      name: "Model S Plaid",
      price: "R$540.000",
      image:carro7,
      transmission: "Automático",
      fuel: "Elétrico",
    },
    {
      brand: "ROLLS-ROYCE",
      name: "Ghost Extended",
      price: "R$4 mi",
      image:carro8,
      transmission: "Automático",
      fuel: "Gasolina",
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
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-3">

                <p className="text-xs text-red-600 font-bold mb-1">
                  {vehicle.brand}
                </p>

                <h2 className="text-base font-bold text-white mb-3">
                  {vehicle.name}
                </h2>

                <div className="grid grid-cols-2 bg-[#191919] mb-4">

                  <div className="flex flex-col items-center py-3">
                    <BsGear className="text-gray-400 text-xs mb-1" />
                    <span className="text-[9px] text-gray-400">
                      {vehicle.transmission}
                    </span>
                  </div>

                  <div className="flex flex-col items-center py-3">
                    <BsFuelPump  className="text-gray-400 text-xs mb-1" />
                    <span className="text-[9px] text-gray-400">
                      {vehicle.fuel}
                    </span>
                  </div>

                </div>

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-[9px] text-gray-300">
                      PREÇO
                    </p>

                    <p className="text-base font-bold text-red-600">
                      {vehicle.price}
                    </p>
                  </div>

                  <button
                    className="flex items-center gap-2 px-3 py-2 text-[9px] font-bold hover:bg-red-600 transition duration-300"
                  >
                    DETALHES
                    <BsArrowRightShort />
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