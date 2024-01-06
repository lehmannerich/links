import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Headline, Main, TextBlock } from "../components/Structure";

function Home() {
  return (
    <>
      <Main>
        <Image
          width={400}
          height={400}
          src="/square_opti.jpg"
          className="h-24 w-24 rounded-full -mb-6 mt-8"
          alt="Erich Lehmann"
        />
        <Headline>Erich Lehmann</Headline>
        <TextBlock className="mt-4">
          ich helfe Startups dabei die Forschungszulage zu bekommen.
        </TextBlock>
        <TextBlock className="mt-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded flex items-center justify-between group hover:bg-stone-50 border"
            >
              <div>
                <p className="font-medium">{project.title}</p>
                {/* <p className="text-stone-500">{project.description}</p> */}
              </div>
              <ArrowUpRightIcon className="h-4 w-4 group-hover:h-5 group-hover:w-5 inline pb-1 text-neutral-400 group-hover:text-neutral-800 transition" />
            </a>
          ))}
        </TextBlock>
      </Main>
    </>
  );
}

const projects = [
  {
    title: "CV",
    link: "https://erich.vercel.app/",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/erichlehmann/",
  },
  {
    title: "Calendly",
    link: "https://calendly.com/meetanyway/erich",
  },
  {
    title: "Email",
    link: "mailto:erich@forschugnszulage.de",
  },
  {
    title: "Forschungszulage: Intro Video",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7096829501967347712/",
  },
  {
    title: "Forschungszulage: Notion Template",
    link: "https://lehmannerich.gumroad.com/l/forschungszulage",
  },
];

export default Home;
