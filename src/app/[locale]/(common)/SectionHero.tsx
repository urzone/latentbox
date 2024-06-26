import { LatentBoxLogo } from "@/components/Logos";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GitHubButton } from "@/components/GitHubButton";
import { HeaderPadding } from "@/components/Header";
import { ContainerFull } from "@/components/Containers";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export function SectionHero() {
  const t = useTranslations("index.hero");
  return (
    <div
      className="py-12 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <ContainerFull>
        <div className="flex flex-col items-center ">
          <HeaderPadding />
          <LatentBoxLogo ext="hero" className="h-32" />

          <div className="h-6" />

          <h2 className="text-4xl font-bold text-center">
        <span
          className="bg-gradient-to-b from-foreground via-foreground/70 to-foreground/60 inline-block text-transparent bg-clip-text py-0.5">
          {t("title")}
        </span>
          </h2>

          <div className="h-3" />

          <p className="text-lg text-foreground/70 leading-7 max-w-[450px] w-full text-center break-words">
            {t.rich("subtitle", {
              LatentCat: (chunk: ReactNode) => (
                <Link href="https://latentcat.com" target="_blank"
                      className="text-foreground underline font-semibold transition decoration-foreground/30 hover:decoration-foreground whitespace-nowrap">
                  Latent Cat
                </Link>
              ),
            })}
          </p>

          <div className="h-6" />

          <div className="flex gap-4">
            <Link href="/docs">
              <Button>
                {t("introduction")}
              </Button>
            </Link>
            <Link href="https://github.com/latentcat/latentbox" target="_blank">
              <GitHubButton />
            </Link>
          </div>

          <div className="h-6" />
        </div>
      </ContainerFull>
    </div>
  )
}