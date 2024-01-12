import { ArrowTopRightOnSquareIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
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
            ich helfe Unternehmen unkompliziert Fördermittel zu bekommen. Die
            Antragstellung ist in 4 Calls erledigt. Das Honorar ist ausschließlich
            erfolgsbasiert.
          </p>
          <p>
            Ich bin spezialisiert auf die Forschungszulage. Damit kann man 25% der
            Personalkosten der letzten vier Jahre zurückerstattet bekommen. Es gibt ein
            paar Deadlines zu beachten, deshalb am besten direkt bei mir melden.
          </p>
        </TextBlock>
        <Headline id="references">Referenzen</Headline>
        <TextBlock className="mt-4">
          {references.map((reference, i) => (
            <div key={i} className="flex gap-4 justify-between border rounded">
              <div className="p-4 md:p-8 pb-0">
                <p className="text-lg font-medium">{reference.name}</p>
                <p className="">
                  {reference.position}
                  <a href={reference.link} target="_blank" rel="noreferrer">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 inline pb-1 m-1 text-stone-500 hover:text-stone-800 print:hidden print:text-stone-800" />
                  </a>
                </p>
                <p className="h-4"></p>
                <p
                  className={`font-bold inline text-sm bg-slate-500 text-white p-0.5 px-2 rounded-full print:pl-0`}
                >
                  {reference.tagline}
                </p>
              </div>
              <Image
                width={500}
                height={500}
                src={reference.img}
                className="h-32 w-32 md:h-40 md:w-40 rounded rounded-l-none"
                alt={reference.name}
              />
            </div>
          ))}
        </TextBlock>
        <div className="print:hidden">
          <Headline>Kontakt</Headline>
          <TextBlock className="mt-6">
            {contact_items.map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded flex items-center justify-between group hover:bg-stone-50 border"
              >
                <div>
                  <p className="font-medium">
                    {contact.title}
                    {i === 0 && (
                      <span className="text-sm text-gray-500"> (preferred)</span>
                    )}
                  </p>
                  {/* <p className="text-stone-500">{contact.description}</p> */}
                </div>
                <ArrowUpRightIcon className="h-4 w-4 group-hover:h-5 group-hover:w-5 inline pb-1 text-neutral-400 group-hover:text-neutral-800 transition" />
              </a>
            ))}
          </TextBlock>
        </div>
        <div className="h-8"></div>
      </Main>
    </>
  );
}

const references = [
  {
    name: "Imran Rehman",
    position: "Founder Kokoro",
    tagline: "€79.460 in 5 Calls",
    img: "/imran.jpg",
    link: "https://bekokoro.com/de/",
    color: "bg-pink-800",
  },
  {
    name: "Marc Metz",
    position: "Founder MeetAnyway",
    tagline: "€167.440 in 4 Calls",
    img: "/marc.jpg",
    link: "https://meetanyway.com/welcome",
    color: "bg-blue-800",
  },
  {
    name: "Frank Steffen",
    position: "Founder Camp3",
    tagline: "€31.500 in 3 Calls",
    img: "/frank.jpg",
    link: "https://www.camp3.co/",
    color: "bg-cyan-800",
  },
  {
    name: "Florian Bauer",
    position: "Founder KiteKraft",
    tagline: "€169.250 in 3 Calls",
    img: "/florian.jpg",
    link: "https://kitekraft.de/",
    color: "bg-amber-800",
  },
];

const contact_items = [
  // {
  //   title: "CV",
  //   link: "https://erich.vercel.app/",
  // },
  {
    title: "Book a Call",
    link: "https://calendly.com/meetanyway/erich",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/erichlehmann/",
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
