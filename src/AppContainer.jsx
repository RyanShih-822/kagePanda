import { Header, Footer, Banner, DiscountInfo, Service } from "@/page";

export default function AppContainer() {
  return (
    <>
      <Header />
      <main className="container flex-column gap-4 mt-4 mb-4 justify-content-start">
        <Banner />
        <DiscountInfo />
        <Service />
      </main>
      <Footer />
    </>
  );
}
