import { Metadata } from "next";
import { GenerateMetadata } from "./GenerateMetadata";

export const metadata: Metadata = GenerateMetadata();

export default function Home() {
  return (
    <>
      <p>test</p>
    </>
  );
}
