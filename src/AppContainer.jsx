import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import DiscountInfo from "./components/DiscountInfo";
import Service from "./components/Service";

export default function AppContainer() {
  return (
    <>
      <Header />
      <main className="container flex-column">
        <Banner />
        <DiscountInfo />
        <Service />
      </main>
      <Footer />
    </>
  );
}
