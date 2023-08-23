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
      <div className="md:pt-16 pt-10 "></div>
      <Header />
      <Desc />
      <Services />
      <Newsletter />
      <Footer />
    </main>
  );
}
