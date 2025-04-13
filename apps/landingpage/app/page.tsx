
export default function Home() {
  return (
   
    <main className="min-h-screen bg-cyan-50 text-gray-900">
      <header className="p-6 flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-left">mowblo</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-blue-100 to-white">
        <h2 className="text-4xl font-extrabold mb-4">Snow and lawn</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          We are going to start with framer than we are going to replicate it into Next.js
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Visualize how you’re doing with clean, minimal graphs and streak counters.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
            <p className="text-gray-600">Daily reminders, streaks, and smart nudges to keep you going.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </main>
  );
}
