import { getDictionary } from "@/lib/getDictionary";
import { Locale } from "@/app/[lang]/i18n.config";
import { HeroSliderClient } from "./ui/hero-slider/HeroSliderClient";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await Promise.resolve(params);

  const t = await getDictionary(lang);
  const slider = t.homePage.heroSlider;

  return <HeroSliderClient slides={[slider["1"], slider["2"], slider["3"]]} />;
}
