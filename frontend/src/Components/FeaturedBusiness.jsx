import barberimage from "../assets/businesses/barber.png"
import craftimage from "../assets/businesses/craft.png"
import designimage from "../assets/businesses/gd.png"
import hairimage from "../assets/businesses/hair.png"


const featuredBusinesses = [
  {
    id: 1,
    name: "Fresh Fade Barbershop",
    category: "Barbering",
    owner: "Student Owner",
    description: "Student barber offering clean fades, tapers, and precise lineups on and around campus.",
    rating: "4.7",
    image: barberimage,
  },
  {
    id: 2,
    name: "Creative Crafts Shop",
    category: "Graphic Design",
    owner: "Student Designer",
    description: "Custom designs for logos, flyers, and social media content tailored for student brands.",
    rating: "4.9",
    image: craftimage,
  },
  {
    id: 3,
    name: "Modern Design Co.",
    category: "Tutoring",
    owner: "Student Tutor",
    description: "Affordable tutoring services helping students succeed in math, coding, and core subjects.",
    rating: "4.3",
    image: designimage,
  },
  {
    id: 4,
    name: "Elite Hair Studio",
    category: "Beauty",
    owner: "Student Owner",
    description: "Professional styling services including braids, installs, and natural hair care.",
    rating: "5.0",
    image: hairimage,
  },
];

export default function FeaturedBusinesses() {
  return (
    <section className="bg-white px-6 py-16 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Featured Businesses
          </p>

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Support Student-Owned Businesses
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Explore a few example businesses from the Aggie community.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBusinesses.map((business) => (
            <article
              key={business.id}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-yellow-100">
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                  {business.category}
                </span>
                <span className="text-sm font-bold text-gray-700">
                  ⭐ {business.rating}
                </span>
              </div>

              <h3 className="text-xl font-extrabold">{business.name}</h3>

              <p className="mt-1 text-sm font-medium text-gray-500">
                {business.owner}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {business.description}
              </p>

              <button className="mt-5 w-full rounded-full bg-blue-700 px-4 py-3 font-bold text-white transition hover:bg-blue-800">
                View Business
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}