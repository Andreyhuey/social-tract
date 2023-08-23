import { Desc, Header, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      <div className="md:pt-16 pt-10 "></div>
      <Header />
      <Desc />
    </main>
  );
}
