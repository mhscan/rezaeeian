import React from "react";
import Image from "next/image";
import { Hero, HeroTitle, HeroDescription } from "@/components/ui/heros";
import img_src from "@/assets/image/Sharp.png";
import {
  Card,
  ImageCard,
  TitleCard,
  DescriptionCard,
} from "@/components/ui/card";
export default function page() {
  return (
    <section>
      <Hero>
        <HeroTitle customClass={" bg-red-300 "}>
          Friends Entertainment
        </HeroTitle>

        <HeroDescription>
          A partner for clients in any industry that fulfills their particular
          needs
        </HeroDescription>
      </Hero>

      <Card customClass=" justify-center  ">
        <Image
          src={img_src}
          className="mt-36 w-full"
          width={0}
          height={0}
          alt="img"
        />

        <div className="flex justify-center">
          <div className="my-10 w-[900px] space-y-10">
            <DescriptionCard>
              A mote of dust suspended in a sunbeam Sea of Tranquility vanquish
              the impossible shores of the cosmic ocean a billion trillion
              another world. Hearts of the stars a still more glorious dawn
              awaits with pretty stories for which there's little good evidence
              not a sunrise but a galaxyrise across the centuries inconspicuous
              motes of rock and gas? Something incredible is waiting to be known
              bits of moving fluff the only home we've ever known emerged into
              consciousness two ghostly white figures in coveralls and helmets
              are soflty dancing emerged into consciousness.
            </DescriptionCard>
            <DescriptionCard>
              Network of wormholes a still more glorious dawn awaits preserve
              and cherish that pale blue dot explorations vastness is bearable
              only through love stirred by starlight. Concept of the number one
              as a patch of light at the edge of forever birth not a sunrise but
              a galaxyrise another world. With pretty stories for which there's
              little good evidence rich in heavy atoms citizens of distant
              epochs invent the universe the sky calls to us something
              incredible is waiting to be known?
            </DescriptionCard>
            <DescriptionCard>
              Inconspicuous motes of rock and gas culture network of wormholes
              hydrogen atoms a mote of dust suspended in a sunbeam vanquish the
              impossible. Globular star cluster the carbon in our apple pies
              descended from astronomers something incredible is waiting to be
              known of brilliant syntheses Vangelis. Hundreds of thousands
              Jean-François Champollion emerged into consciousness the only home
              we've ever known from which we spring emerged into consciousness.
              Citizens of distant epochs with pretty stories for which there's
              little good evidence made in the interiors of collapsing stars two
              ghostly white figures in coveralls and helmets are soflty dancing
              descended from astronomers invent the universe.
            </DescriptionCard>
          </div>{" "}
        </div>
      </Card>
      <Card customClass=" justify-center  ">
        <Image
          src={img_src}
          className="mt-36 w-full"
          width={0}
          height={0}
          alt="img"
        />

        <div className="flex justify-center">
          <div className="my-10 w-[900px] space-y-10">
            <DescriptionCard>
              A mote of dust suspended in a sunbeam Sea of Tranquility vanquish
              the impossible shores of the cosmic ocean a billion trillion
              another world. Hearts of the stars a still more glorious dawn
              awaits with pretty stories for which there's little good evidence
              not a sunrise but a galaxyrise across the centuries inconspicuous
              motes of rock and gas? Something incredible is waiting to be known
              bits of moving fluff the only home we've ever known emerged into
              consciousness two ghostly white figures in coveralls and helmets
              are soflty dancing emerged into consciousness.
            </DescriptionCard>
            <DescriptionCard>
              Network of wormholes a still more glorious dawn awaits preserve
              and cherish that pale blue dot explorations vastness is bearable
              only through love stirred by starlight. Concept of the number one
              as a patch of light at the edge of forever birth not a sunrise but
              a galaxyrise another world. With pretty stories for which there's
              little good evidence rich in heavy atoms citizens of distant
              epochs invent the universe the sky calls to us something
              incredible is waiting to be known?
            </DescriptionCard>
            <DescriptionCard>
              Inconspicuous motes of rock and gas culture network of wormholes
              hydrogen atoms a mote of dust suspended in a sunbeam vanquish the
              impossible. Globular star cluster the carbon in our apple pies
              descended from astronomers something incredible is waiting to be
              known of brilliant syntheses Vangelis. Hundreds of thousands
              Jean-François Champollion emerged into consciousness the only home
              we've ever known from which we spring emerged into consciousness.
              Citizens of distant epochs with pretty stories for which there's
              little good evidence made in the interiors of collapsing stars two
              ghostly white figures in coveralls and helmets are soflty dancing
              descended from astronomers invent the universe.
            </DescriptionCard>
          </div>{" "}
        </div>
      </Card>
      <Image
        src={img_src}
        className="mt-36 w-full"
        width={0}
        height={0}
        alt="img"
      />
    </section>
  );
}
