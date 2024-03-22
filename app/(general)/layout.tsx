import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main className="m-8">
      <span>Entramos al Layout</span>
      <hr></hr>
      {children}
    </main>
    </>
  );
}
