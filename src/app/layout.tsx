import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
import "./globals.css";

export default function RootLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
