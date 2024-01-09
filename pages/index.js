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
            Personalkosten der letzten vier Jahre zurückerstattet bekommen. Es gibt ein
            paar Deadlines zu beachten, deshalb am besten direkt bei ihm melden.
          </p>
        </TextBlock>
        <Headline id="references">Referenzen</Headline>
        <TextBlock className="mt-4">
          {references.map((reference, i) => (
            <div key={i} className="flex gap-4 justify-between border rounded">
              <div className="p-8 pb-0">
                <p className="text-lg font-medium">{reference.name}</p>
                <p className="">{reference.position}</p>
                <p className="h-4"></p>
                <p className="font-bold text-sm bg-slate-500 text-white p-0.5 px-2 rounded-full">
                  {reference.tagline}
                </p>
              </div>
              <Image
                width={500}
                height={500}
                src={reference.img}
                className="h-40 w-40 rounded rounded-l-none"
                alt={reference.name}
              />
            </div>
          ))}
        </TextBlock>
        <Headline>Kontakt</Headline>
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
        <div className="h-8"></div>
      </Main>
    </>
  );
}

const references = [
  {
    name: "Imran Rehman",
    position: "Founder Kokoro",
    tagline: "€79,456 in 6 hours",
    img: "/imran.jpg",
  },
  {
    name: "Marc Metz",
    position: "Founder MeetAnyway",
    tagline: "€179,123 in 4 hours",
    img: "/marc.jpg",
  },

  {
    name: "Florian Bauer",
    position: "Founder KiteKraft",
    tagline: "€169,000 in 3 hours",
    img: "/florian.jpg",
  },
];

const projects = [
  // {
  //   title: "CV",
  //   link: "https://erich.vercel.app/",
  // },
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
    link: "mailto:erich@dieforschungszulage.de",
  },
  // {
  //   title: "Forschungszulage: Intro Video",
  //   link: "https://www.linkedin.com/feed/update/urn:li:activity:7096829501967347712/",
  // },
  // {
  //   title: "Forschungszulage: Notion Template",
  //   link: "https://lehmannerich.gumroad.com/l/forschungszulage",
  // },
];

export default Home;
