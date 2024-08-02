import {
  Desc,
  Footer,
  Header,
  Navbar,
  Newsletter,
  Services,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="lg:pt-32 pt-20"></div>
      <Header />
      <Desc />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  );
}
