"use client";
import { HomePage } from "../component/HomePage";
import { OpenLine } from "../component/OpenLine";

export default function page() {
  return <OpenLine HomePage={<HomePage />} />;
}
