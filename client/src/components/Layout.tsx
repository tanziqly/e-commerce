import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 z-50 border-b w-full flex justify-center">
        <Header />
      </header>
      <main className="flex-1 flex justify-center">
        <div className="flex-1 flex w-full max-w-[1480px] px-5">{children}</div>
      </main>
      <footer className="w-full flex justify-center border-t">
        <Footer />
      </footer>
    </div>
  );
};
