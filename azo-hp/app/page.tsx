"use client";
import { HomePage } from "./component/HomePage";
import { LineBottom, LineTop } from "./component/OpenLine";
import { ThreeText } from "./component/ThreeText";

export default function Page() {
  return (
    <>
      <LineTop />
      <LineBottom />
      <HomePage />
      <ThreeText />
    </>
  );
}
