import { Desc, Header, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="md:pt-14 pt-10 "></div>
      <Header />
      <Desc />
    </main>
  );
}
