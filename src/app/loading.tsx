import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 ">
      <Image
        className="animate-spin [animation-duration:3s]"
        src="/logo/icon.png"
        alt="Логотип TrinkoTattoo"
        width={120}
        height={120}
        priority
      />
      <div className="text-center flex flex-col gap-2">
        <p className="text-sm text-muted-foreground font-medium">Загрузка...</p>
        <div className="w-48 h-1.5 bg-white rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loading-bar_2s_infinite]" />
        </div>
      </div>
    </div>
  );
}
