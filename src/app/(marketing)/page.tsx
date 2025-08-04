import { Metadata } from "next";
import { TalkHero } from "@/components/TalkHero";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <TalkHero />
    </main>
  );
}
