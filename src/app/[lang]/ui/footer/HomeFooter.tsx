import { Logo } from "../header/ui/Logo";

export const HomeFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900">
      <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-3 md:gap-10">
        <div>
          <Logo />
        </div>
        <div className="md:text-center">
          <p className="font-bold text-white">© {year} All Rights Reserved</p>
        </div>
        <div className="md:text-right">
          <a
            className="inline-block font-bold text-white duration-300 hover:text-red-600"
            href="/terms/terms-en.pdf"
            download="Terms_and_Conditions.pdf"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
