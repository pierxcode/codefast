import ButtonLogin2 from "@/components/ButtonLogin2";

export default function Home() {
  const isLoggedIn = true;
  const name = "Pier";

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-3xl mx-auto">
          <div className="font-bold">🧮 Tally</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin2 isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <p className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build products your customers love.
        </p>
        <ButtonLogin2 isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
