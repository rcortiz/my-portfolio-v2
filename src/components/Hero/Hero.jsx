"use client";

import React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import Bubble from "../Bubble/Bubble";
import SvgHeroImg from "../icons/HeroImg";

import { useToast } from "@/components/ui/use-toast";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import ContactDialog from "../ContactDialog/ContactDialog";

const Hero = () => {
  const { toast } = useToast();
  return (
    <main className="flex flex-col gap-10 md:w-[800px] mx-auto">
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between">
        <div className="space-y-10 md:w-[500px] order-last md:order-1">
          <p className="font-cera font-bold text-xl leading-8 tracking-wide lg:text-3xl">
            Hello, I'm Ralph Ortiz. I specialize in transforming imagination
            into delightful digital experiences.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <ContactDialog />
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                toast({
                  title: "Scheduled: Catch up",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                });
              }}
            >
              Schedule a meeting <ArrowRightIcon className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
        <figure className="relative mx-auto order-1 md:order-last">
          <SvgHeroImg className="self-center w-[200px] h-[200px]" />
          <div className="absolute -top-5 left-20">
            <Bubble />
          </div>
        </figure>
      </div>
      <article className="space-y-6">
        <p className="font-cera font-bold">
          Here are a few technologies that I've been working with recently:
        </p>
        <div className="flex justify-between md:justify-start">
          <ul className="space-y-2 md:mr-16">
            <li>→ Javascript</li>
            <li>→ Typescript</li>
            <li>→ Tailwind</li>
            <li>→ NodeJS</li>
          </ul>
          <ul className="space-y-2">
            <li>→ ExpressJS</li>
            <li>→ Docker</li>
            <li>→ Git / Github</li>
            <li>→ MongoDB</li>
          </ul>
        </div>
        <p className="font-cera font-bold mb-5">Here&apos;s my social links:</p>
        <div className="flex justify-between md:justify-start">
          <p className="flex items-center">
            <Link href="/" className="flex md:w-32 items-center">
              Twitter <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Link>
          </p>
          <p className="flex md:w-32 items-center">
            <Link href="/" className="flex items-center">
              Facebook <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Link>
          </p>
          <p className="flex items-center">
            <Link href="/" className="flex md:w-32  items-center">
              Linkedin <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
};

export default Hero;