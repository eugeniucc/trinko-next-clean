import { LangSwitcher } from "./components/navigation/LangSwitcher";
import { MainNav } from "./components/navigation/MainNav";
import { MobileNav } from "./components/navigation/MobileNav";

export default function Home() {
  return (
    <div className="flex items-center gap-10">
      <MainNav />
      <MobileNav />
      <LangSwitcher />
    </div>
  );
}
