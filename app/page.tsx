import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomerFilter from "@/components/CustomerFilter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Promo Catalogue </h1>
          <p> Explore the current promos that matter. </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomerFilter title="fuel" />
            <CustomerFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
