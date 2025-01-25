import ButtonLogin2 from "@/components/ButtonLogin2";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import productDemo from "./productDemo.jpeg"

export default function Home() {
  const isLoggedIn = true;
  const name = "Pier";

  const greeting1 = "Hello " + name;
  console.log(greeting1); // OUTPUT 1: "Hello Pier"

  const greeting2 = `Hello  + ${isLoggedIn ? name : "there"}`;
  console.log(greeting2); // OUTPUT 2: "Hello Pier"

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
             <div>
              <div className="flex items-center font-bold">   
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="green" 
                  className="h-6 w-6 mr-1 stroke-primary"
                >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" 
                />
                </svg>
                Klanten stemmen
              </div>
            </div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#prijzen">Prijzen</a>
            <a className="link link-hover"href="#vragen">Vragen</a>
          </div>
          <ButtonLogin2 
            isLoggedIn={isLoggedIn} 
            name={name}
            />
        </div>
      </section>

      {/* HERO */}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
       <Image 
       src={productDemo} 
       alt="Product Demo" 
       className="w-96 rounded-3xl"
       />
       
       <div>
        <h1 className="text-4xl font-extrabold mb-6">
          Verzamel feedback van klanten
          en bouw betere producten
        </h1>
        <p className="opacity-90 mb-10">
          Maak een feedback bord in minuten, prioritiseer features, en bouw producten waar klanten van houden.
        </p>
        <ButtonLogin2 isLoggedIn={isLoggedIn} name={name} />
      </div>
      </section>

      {/* PRICING */}
      <section className="bg-base-200" id="prijzen">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
          Prijzen
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Pakketten voor ieder project
            </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/ maand</div>
            </div>          
          
              <ul className="space-y-2">
              {[
                "Klanten feedback verzamelen",
                "Onbeperkt aantal projecten",
                "Admin dashboard",
                "Ma-vr support",
              ].map((priceItem) => {
                return (
                <li
                  className="flex gap-2 items-center"
                  key={priceItem}
                  >
                  <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 16 16" 
                  fill="currentColor"
                  className="text-green-600 size-4"
                  >
                  <path 
                  fillRule="evenodd" 
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" 
                  clipRule="evenodd" 
                  />
                  </svg>
                  {priceItem}
                </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section id="vragen">
      {/* FAQ */}
      <FAQ />
      </section>
    </main>
  );
}