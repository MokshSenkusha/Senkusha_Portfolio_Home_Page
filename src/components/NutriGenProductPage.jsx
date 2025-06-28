import React from 'react';
import nutrigenLogo from '../assets/Nutrigen.png';

const NutriGenProductPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16 px-8 text-center">
        <img
          src={nutrigenLogo}
          alt="NutriGen Logo"
          className="mx-auto mb-6"
          style={{ width: '122px', height: '155px' }}
        />
        <h1 className="text-4xl font-bold mb-4">Scan Smarter. Eat Better.</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          NutriGen helps you track calories and nutrients by simply scanning QR codes on food items.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">Try Demo</button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-xl hover:bg-green-50">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Your Smart Food Scanner – Powered by Data</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "📷 QR Code Scanning", desc: "Instantly fetch food data by scanning QR codes." },
            { title: "🔢 Calorie & Nutrient Info", desc: "See calories, macros, vitamins, and ingredients." },
            { title: "📊 Personalized Dashboard", desc: "Track your intake with charts and smart goals." },
            { title: "🔄 API Integration", desc: "Built on OpenFoodFacts & AI-powered recognition." },
            { title: "🌐 Works Anywhere", desc: "Supports global food standards and mobile use." },
            { title: "🔐 Secure & Private", desc: "Data is protected with end-to-end encryption." }
          ].map((f, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16 px-8 bg-blue-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Why NutriGen?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">👤 For Individuals</h3>
            <p>Ideal for fitness tracking, weight management, and health-conscious eating.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🏢 For Companies</h3>
            <p>Perfect for employee wellness programs and smart cafeterias.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">💻 For Developers</h3>
            <p>Use our API to build nutrition-based tools and apps easily.</p>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Tech Behind NutriGen</h2>
        <ul className="list-disc max-w-3xl mx-auto space-y-3 text-lg pl-6">
          <li>Real-time API integration with OpenFoodFacts.</li>
          <li>AI-based food recognition and QR processing.</li>
          <li>Secure cloud data handling and storage.</li>
          <li>Nutrition analytics and dietary trend tracking.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-green-50">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Amit R.", text: "NutriGen makes calorie tracking effortless! I just scan and go." },
            { name: "Neha D.", text: "This app helped me manage my diet during my fitness journey. Love the dashboard!" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-green-200 to-blue-200">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
        <p className="mb-6">Start using NutriGen or contact us for integration into your platform.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800">Start Using NutriGen</button>
          <button className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100">Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} NutriGen | Powered by Senkusha Data Solutions</p>
      </footer>
    </div>
  );
};

export default NutriGenProductPage;

