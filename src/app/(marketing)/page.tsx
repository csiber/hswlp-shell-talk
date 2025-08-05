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
      <section className="mt-16 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold">Stay connected effortlessly</h2>
        <p>
          Talk provides a lightweight environment for real-time conversations.
          Collaborate with your team without installing any software.
        </p>
        <p>
          Built on modern web standards, the platform works on any device and
          keeps your discussions secure.
        </p>
      </section>
    </main>
  );
}
