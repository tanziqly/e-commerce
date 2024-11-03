import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b w-full flex justify-center">
        <Header />
      </header>
      <main className="flex-1 flex justify-center">
        <div className="flex-1 flex w-full max-w-[1440px]">{children}</div>
      </main>
      <footer className="w-full flex justify-center border-t">
        <Footer />
      </footer>
    </div>
  );
};
