import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Headline, Main, TextBlock } from "../components/Structure";

function Home() {
  return (
    <>
      <Main>
        <div className="h-8"></div>
        <Image
          width={400}
          height={400}
          src="/square_opti.jpg"
          className="h-24 w-24 rounded-full -mb-6"
          alt="Erich Lehmann"
        />
        <Headline>Erich Lehmann</Headline>
        <TextBlock className="mt-4">
          <p>
            ich helfe Unternehmen unkompliziert Fördermittel zu bekommen. Antragstellung
            ist in 4 calls erledigt. Honorar ist ausschließlich erfolgsbasiert.
          </p>
          <p>
            Ich bin spezialisiert auf die Forschungszulage, damit kann man 25% der
            Personalkosten der letzten vier Jahre zurückerstattet bekommen. Ich habe{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => scrollToReferences()}
            >
              sehr gute Referenzen.
            </span>{" "}
            Es gibt ein paar Deadlines zu beachten, deshalb am besten direkt bei ihm
            melden.
          </p>
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
        <Headline id="references">Referenzen</Headline>
        <TextBlock className="mt-4">
          {references.map((reference, i) => (
            <div key={i} className="flex gap-4">
              <Image
                width={500}
                height={500}
                src={reference.img}
                className="h-40 w-40 rounded"
                alt={reference.name}
              />
              <div className="">
                <p className="font-medium">{reference.tagline}</p>
                <p className="">{reference.name}</p>
                <p className="">{reference.position}</p>
              </div>
            </div>
          ))}
        </TextBlock>
      </Main>
    </>
  );
}

// create function "scrollToReferences"

function scrollToReferences() {
  const element = document.getElementById("references");
  if (element) {
    element.classList.add("bg-yellow-200");
    setTimeout(() => {
      element.classList.remove("bg-yellow-200");
    }, 400);
  }
  window.scrollTo({ top: 1000, behavior: "smooth" });
}

const references = [
  {
    name: "Marc Metz",
    position: "Founder MeetAnyway",
    tagline: "€180k in 4h",
    img: "/marc.jpg",
  },
];

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
