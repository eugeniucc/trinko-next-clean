import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="inline-block" href="/">
      <Image src="/logo/icon.png" alt="Logo" width={64} height={64} priority />
    </Link>
  );
};
