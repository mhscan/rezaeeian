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
          Featured Works
          </HeroTitle>
  
          <HeroDescription>
          We work with a lots of great people to give them wide range of experiences. Here’s our works
          </HeroDescription>
        </Hero>
  
        <Card>
          <Image
            src={img_src}
            className="mt-36 w-full"
            width={0}
            height={0}
            alt="img"
          />
          <TitleCard>Friends Entertainment</TitleCard>
          <DescriptionCard>
            A partner for clients in any industry that fulfils their particular
            needs
          </DescriptionCard>
        </Card>
  
        <Card>
          <Image
            src={img_src}
            className="mt-36 w-[900px]"
            width={0}
            height={0}
            alt="img"
          />
          <TitleCard>Friends Entertainment</TitleCard>
          <DescriptionCard>
            A partner for clients in any industry that fulfils their particular
            needs
          </DescriptionCard>
        </Card>
  
        <div className="flex justify-end">
          <Card>
            <Image
              src={img_src}
              className="mt-36 w-[900px] justify-end"
              width={0}
              height={0}
              alt="img"
            />
            <TitleCard>Friends Entertainment</TitleCard>
            <DescriptionCard>
              A partner for clients in any industry that fulfils their particular
              needs
            </DescriptionCard>
          </Card>
        </div>
  
  
        <Card>
          <Image
            src={img_src}
            className="mt-36 w-full"
            width={0}
            height={0}
            alt="img"
          />
          <TitleCard>Friends Entertainment</TitleCard>
          <DescriptionCard>
            A partner for clients in any industry that fulfils their particular
            needs
          </DescriptionCard>
        </Card>
  
        <Card>
          <Image
            src={img_src}
            className="mt-36 w-[900px]"
            width={0}
            height={0}
            alt="img"
          />
          <TitleCard>Friends Entertainment</TitleCard>
          <DescriptionCard>
            A partner for clients in any industry that fulfils their particular
            needs
          </DescriptionCard>
        </Card>
  
        <div className="flex justify-end">
          <Card>
            <Image
              src={img_src}
              className="mt-36 w-[900px] justify-end"
              width={0}
              height={0}
              alt="img"
            />
            <TitleCard>Friends Entertainment</TitleCard>
            <DescriptionCard>
              A partner for clients in any industry that fulfils their particular
              needs
            </DescriptionCard>
          </Card>
        </div>
      </section>
    );
}
