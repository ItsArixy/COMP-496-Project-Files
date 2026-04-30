import { useState } from "react";
import { Search, Users, Clock, ArrowRight } from "lucide-react";

// Temporary mock data (replace with backend later)
const services = [
  {
    id: 1,
    businessName: "Aggie Cuts",
    serviceName: "Haircuts & Lineups",
    category: "Barbering",
    description: "Student barber offering haircuts, tapers, lineups, and beard trims.",
    price: "$25+",
  },
  {
    id: 2,
    businessName: "Crafted By Aggies",
    serviceName: "Custom Art Pieces",
    category: "Arts and Crafts",
    description: "Handmade gifts, paintings, decorations, and custom craft work.",
    price: "$15+",
  },
  {
    id: 3,
    businessName: "Blue & Gold Graphics",
    serviceName: "Logo & Flyer Design",
    category: "Graphic Design",
    description: "Logos, flyers, business cards, and social media graphics.",
    price: "$30+",
  },
  {
    id: 4,
    businessName: "Campus Captures",
    serviceName: "Photography Sessions",
    category: "Photography",
    description: "Graduation photos, brand shoots, events, and portraits.",
    price: "$50+",
  },
  {
    id: 5,
    businessName: "Aggie Beauty Bar",
    serviceName: "Makeup & Beauty Services",
    category: "Beauty",
    description: "Makeup, lashes, brows, and beauty services for students.",
    price: "$35+",
  },
];

export default function Home({onListBusinessClick}) {
  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories list
  const categories = [
    "All",
    "Barbering",
    "Arts and Crafts",
    "Graphic Design",
    "Photography",
    "Beauty",
  ];

  // Filter logic (search + category)
  const filteredServices = services.filter((service) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      service.businessName.toLowerCase().includes(query) ||
      service.serviceName.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Determines if user is just browsing (no search/filter applied)
  const isDefaultView =
    searchQuery.trim() === "" && selectedCategory === "All";

  const sectionTitle = isDefaultView
    ? "All Businesses"
    : "Search Results";

  return (
    <section 
      id="services-section"
      className="bg-gradient-to-br from-[#0876d8] via-[#0871d1] to-[#0754a7] text-white"
    >
      
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-24">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black shadow-lg">
          Supporting Aggie Entrepreneurs Since 2026
        </div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold md:text-6xl">
          Search for Services That{" "}
          <span className="text-yellow-400">Cater to You!</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
          Connect with talented NC A&amp;T students offering everything from
          haircuts to tutoring. Support your fellow Aggies today.
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto mt-10 max-w-3xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for services, businesses, or students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-16 w-full rounded-full bg-white pl-16 pr-6 text-black shadow-2xl outline-none"
          />
        </div>

        {/* Category Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 font-semibold cursor-pointer ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          
          {/* Reset to default */}
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-black hover:scale-105 cursor-pointer"
          >
            Browse All Services
            <ArrowRight size={20} />
          </button>

          <button 
            onClick={onListBusinessClick}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white hover:bg-white/20 cursor-pointer"
          >
            List Your Business
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-white/20 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-8 px-8 py-8 text-center sm:grid-cols-2">
          <div>
            <div className="flex justify-center gap-2 text-3xl font-extrabold">
              <Users size={24} />
              6+
            </div>
            <p className="text-white/80">Student Businesses</p>
          </div>

          <div>
            <div className="flex justify-center gap-2 text-3xl font-extrabold">
              <Clock size={24} />
              24/7
            </div>
            <p className="text-white/80">Booking Available</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white px-6 py-14 text-black">
        <div className="mx-auto max-w-7xl">

          {/* Dynamic Title */}
          <h3 className="text-3xl font-extrabold">{sectionTitle}</h3>

          <p className="mt-2 text-gray-600">
            {isDefaultView
              ? "Browse student-owned businesses in the Aggie community."
              : `Showing ${filteredServices.length} result${
                  filteredServices.length !== 1 ? "s" : ""
                }.`}
          </p>

          {/* Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border p-6 shadow hover:shadow-lg"
              >
                {/* Placeholder (initials instead of image) */}
                <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-blue-100">
                  <span className="text-xl font-bold text-blue-700">
                    {service.businessName
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>

                <h4 className="text-xl font-bold">
                  {service.serviceName}
                </h4>

                <p className="text-blue-600 font-semibold">
                  {service.businessName}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>

                <p className="mt-3 font-bold">{service.price}</p>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-500">
                No services found. Try another search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}