import Head from "next/head";
import Image from "next/image";
import portalImg from "@/public/portal-img.png";
import Link from "next/link";
import { Card, Container, LinkGrid, Title } from "./styles";
import useBreakpoints from "@/hooks/use-brakpoints";
import RickAndMortyLogo from "@/public/rick-and-morty-logo.png";

export default function Home() {
  const { isXs } = useBreakpoints();

  return (
    <Container>
      <Head>
        <title>Rick and Morty Universe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          width={isXs ? 300 : 700}
          src={RickAndMortyLogo}
          alt="Rick and morty coming out of portal"
        />
        <Image
          width={isXs ? 300 : 500}
          src={portalImg}
          alt="Rick and morty coming out of portal"
        />
        <LinkGrid>
          <Card>
            <Link
              data-testid="character-link"
              className="home-link"
              href="/character"
            >
              Characters &rarr;
            </Link>
          </Card>
          <Card>
            <Link
              data-testid="location-link"
              className="home-link"
              href="/location"
            >
              Locations &rarr;
            </Link>
          </Card>
          <Card>
            <Link
              data-testid="episode-link"
              className="home-link"
              href="/episode"
            >
              Episodes &rarr;
            </Link>
          </Card>
        </LinkGrid>
      </main>
    </Container>
  );
}
