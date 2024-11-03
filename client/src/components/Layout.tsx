import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1 flex justify-center">
        <div className="flex-1 flex w-full max-w-[1440px]">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
