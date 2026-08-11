import {
  FiArrowRight, FiShield, FiAward,
  FiTrendingUp, FiHeadphones, FiFileText, FiBatteryCharging
} from "react-icons/fi";

const cars = [
  ["BENTLEY", "2024 Continental GT Speed", "1,200 mi", "$289,000",
   "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80"],
  ["PORSCHE", "2023 911 Turbo S", "4,800 mi", "$224,900",
   "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80"],
  ["TESLA", "2024 Model S Plaid", "2,100 mi", "$109,990",
   "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80"],
  ["MERCEDES-BENZ", "2024 AMG GT 63 S", "890 mi", "$184,500",
   "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"]
];

const features = [
  [FiShield, "CERTIFIED QUALITY", "Every vehicle passes a 200-point inspection."],
  [FiAward, "CURATED SELECTION", "Handpicked inventory of the world's finest automobiles."],
  [FiTrendingUp, "TRANSPARENT PRICING", "No hidden fees. No pressure. Straightforward pricing."],
  [FiHeadphones, "WHITE-GLOVE SERVICE", "Dedicated advisors available 7 days a week."],
  [FiFileText, "FULL WARRANTY", "Certified vehicles include an extended warranty."],
  [FiAward, "ELITE MEMBERSHIP", "Exclusive benefits for returning clients."]
];

function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center pt-14"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="ml-auto max-w-lg">

            <p className="mb-5 text-xs font-bold tracking-widest text-red-600">
              PREMIUM AUTOMOTIVE DEALERSHIP
            </p>

            <h1 className="text-6xl font-black leading-none sm:text-7xl">
              DRIVE<br />
              <span className="text-red-600">BEYOND</span><br />
              LIMITS
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-neutral-300">
              The world's most exclusive automobiles, curated for those
              who demand nothing less than perfection.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#vehicles"
                className="bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
              >
                EXPLORE INVENTORY <FiArrowRight className="inline" />
              </a>

              <a
                href="#about"
                className="border border-neutral-500 px-5 py-3 text-xs font-bold hover:border-red-600"
              >
                OUR STORY
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 grid w-full grid-cols-2 border-t border-neutral-700 bg-black/70 md:grid-cols-4">
          {[
            ["2,400+", "VEHICLES SOLD"],
            ["19", "YEARS OF EXCELLENCE"],
            ["98%", "CLIENT SATISFACTION"],
            ["50+", "PREMIUM BRANDS"]
          ].map(stat => (
            <div className="border-r border-neutral-700 p-4 text-center" key={stat[1]}>
              <b className="text-xl">{stat[0]}</b>
              <p className="text-xs text-neutral-500">{stat[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vehicles" className="px-5 py-20">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs font-bold tracking-widest text-red-600">
            HANDPICKED SELECTION
          </p>

          <h2 className="mt-2 text-4xl font-black">
            FEATURED VEHICLES
          </h2>

          <p className="mt-4 text-sm text-neutral-500">
            Exceptional automobiles selected for rarity, condition and value.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cars.map(car => (
              <article
                key={car[1]}
                className="overflow-hidden border border-neutral-800 bg-neutral-950 transition hover:-translate-y-1 hover:border-red-600"
              >
                <img
                  src={car[4]}
                  alt={car[1]}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <p className="text-xs font-bold text-red-600">{car[0]}</p>

                  <h3 className="mt-1 text-sm font-bold">{car[1]}</h3>

                  <p className="mt-4 text-xs text-neutral-500">
                    MILEAGE: {car[2]}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <strong className="text-red-600">{car[3]}</strong>

                    <button className="border border-neutral-700 px-3 py-2 text-xs hover:border-red-600">
                      DETAILS
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-neutral-900 px-5 py-20">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-bold tracking-widest text-red-600">
            WHY AUTO ELITE
          </p>

          <h2 className="mt-3 text-4xl font-black">
            THE ELITE DIFFERENCE
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-500">
            Six reasons the most discerning buyers trust us.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon, title, text], i) => (
              <div
                key={title}
                className={`border border-neutral-800 p-6 text-left ${
                  i === 1 ? "bg-red-600" : "bg-neutral-950"
                }`}
              >
                <Icon className="text-2xl text-red-600" />

                <h3 className="mt-5 text-xs font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-neutral-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-2">

        <div
          className="min-h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80')"
          }}
        />

        <div className="p-10 lg:p-20">
          <p className="text-xs font-bold tracking-widest text-red-600">
            OUR PHILOSOPHY
          </p>

          <h2 className="mt-4 text-4xl font-black">
            MORE THAN A DEALERSHIP.
            <span className="block text-red-600">A LIFESTYLE.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-neutral-400">
            At Auto Elite, acquiring an exceptional automobile is an
            experience guided by expertise, trust and commitment.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
          >
            OUR STORY <FiArrowRight className="inline" />
          </a>
        </div>

      </section>

      <section className="bg-red-600 px-5 py-7">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 md:flex-row">

          <div className="flex items-center gap-4">
            <FiBatteryCharging size={35} />
            <div>
              <p className="text-xs font-bold">NOW AVAILABLE</p>
              <h3 className="font-black">
                Elétrico & Híbrido LUXURY VEHICLES
              </h3>
            </div>
          </div>

          <a
            href="#vehicles"
            className="bg-white px-5 py-3 text-xs font-bold text-red-600 hover:bg-black hover:text-white"
          >
            EXPLORE EV COLLECTION
          </a>

        </div>
      </section>

      <section id="contact" className="px-5 py-24 text-center">
        <p className="text-xs font-bold tracking-widest text-red-600">
          BEGIN YOUR JOURNEY
        </p>

        <h2 className="mt-4 text-5xl font-black">
          YOUR DREAM CAR
          <span className="block text-red-600">AWAITS YOU</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm text-neutral-500">
          Schedule a private consultation with our specialists.
        </p>

        <a
          href="#contact"
          className="mt-7 inline-block bg-red-600 px-5 py-3 text-xs font-bold hover:bg-red-700"
        >
          BOOK A CONSULTATION
        </a>
      </section>

      <footer id="faq" className="border-t border-neutral-800 bg-neutral-900 px-5 py-10">

        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <b className="tracking-widest">
              <span className="bg-red-600 px-1">AE</span> AUTO
              <span className="text-red-600"> ELITE</span>
            </b>

            <p className="mt-4 text-xs text-neutral-500">
              Curating the world's finest automobiles since 2005.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">NAVIGATION</h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#vehicles">Vehicles</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">SERVICES</h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
              <span>New Vehicles</span>
              <span>Pre-Owned</span>
              <span>Financing</span>
              <span>Maintenance</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-red-600">CONTACT</h3>

            <div className="mt-4 space-y-3 text-xs text-neutral-500">
              <p>1250 Park Avenue, New York</p>
              <p>+1 (212) 555-1234</p>
              <p>info@autoelite.com</p>
            </div>
          </div>

        </div>

        <p className="mx-auto mt-10 max-w-6xl border-t border-neutral-800 pt-5 text-xs text-neutral-600">
          © 2026 Auto Elite. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;