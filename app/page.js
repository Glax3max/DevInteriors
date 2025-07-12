import Carousel from "./components/Carousal.js";
import ShopCategories from "./components/Category.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";
import ServiceSection from "./components/ServiceSection.js";
import SubNav from "./components/SubNav.js";


export default function Home() {
  return (
    <>
       <Nav />
       <SubNav />
       <Carousel />
       <div className="text-4xl text-center pt-14 pb-2 font-extrabold">Shops Categories</div>
       <ShopCategories/>
       <div className="text-4xl text-center pt-14 pb-2 font-extrabold"> Our Services</div>
       <ServiceSection />
        <div className="relative max-w-screen mt-12 h-[80vh]">
          {/* Background Image */}
          <img
            src="/slide3.jpg"
            alt="Slide"
            className="w-full h-full object-cover brightness-75"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-semibold px-4 leading-tight">
              “Where Comfort Meets Elegance,<br />And Every Detail Speaks of Luxury.”
            </h2>
          </div>
        </div>

       <Footer />
       {/* <main className="min-h-screen"></main> */}
    </>
  );
}
