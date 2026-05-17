"use client";

import Image, { type StaticImageData } from "next/image";
import { Briefcase, Code2, CircuitBoard, Package, Layers } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";

import robinPhoto from "@/robin.png";
import saqibPhoto from "@/saqib.png";
import rajniPhoto from "@/rajni.png";
import shitalPhoto from "@/shital.png";
import gauravPhoto from "@/gaurav.png";

type TeamMember = {
  name: string;
  role: string;
  icon: typeof Briefcase;
  description: string;
  accent: string;
  photo: StaticImageData;
};

const team: TeamMember[] = [
  {
    name: "Robin",
    role: "Founder & Business Strategy",
    icon: Briefcase,
    description:
      "Founder and Strategic Lead responsible for business growth, partnerships, client communication, corporate meetings, negotiations, and strategic collaborations.",
    accent: "from-cyan-400 to-blue-600",
    photo: robinPhoto,
  },
  {
    name: "Saqib",
    role: "Electronics, AI & Product Development",
    icon: Code2,
    description:
      "Core technical architect specializing in electronics engineering, embedded systems, software development, AI, firmware, IoT systems, intelligent automation, and advanced coding solutions.",
    accent: "from-blue-500 to-indigo-600",
    photo: saqibPhoto,
  },
  {
    name: "Gaurav Kumar Bhullan",
    role: "Full-Stack Development, Web & AI Solutions",
    icon: Layers,
    description:
      "Handles full-stack development, website and app development, UI/UX implementation, API integrations, and AI-powered digital solutions. Transforms ideas into scalable, modern, and production-ready technology products.",
    accent: "from-violet-500 to-purple-600",
    photo: gauravPhoto,
  },
  {
    name: "Rajni",
    role: "PCB Design & Advanced Manufacturing",
    icon: CircuitBoard,
    description:
      "Responsible for PCB design, rapid prototyping, makerspace operations, PCB routers, 3D printers, CNC machines, VMC systems, and physical hardware development.",
    accent: "from-emerald-400 to-cyan-500",
    photo: rajniPhoto,
  },
  {
    name: "Shital",
    role: "Procurement & Vendor Management",
    icon: Package,
    description:
      "Manages hardware procurement, component sourcing, supplier coordination, vendor relationships, quality, cost-effective sourcing, and production material availability.",
    accent: "from-amber-400 to-orange-500",
    photo: shitalPhoto,
  },
];

export function Team() {
  return (
    <section id="team" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-midnight/30 to-transparent" />
      <div className="container-custom relative mx-auto">
        <AnimateIn>
          <SectionLabel>Leadership</SectionLabel>
          <SectionHeading
            title="The Team Behind the Innovation"
            align="center"
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {team.map((member, i) => (
            <AnimateIn key={member.name} delay={i * 0.08} className="h-full">
              <TeamCard member={member} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group glass-card relative flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:border-cyan-400/20">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${member.accent} opacity-60 transition-opacity group-hover:opacity-100`}
      />

      {/* Photo */}
      <div className="relative mx-4 mt-4 aspect-square overflow-hidden rounded-xl border border-white/10 bg-bg-graphite">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          priority={member.name === "Robin"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
        <div
          className={`absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${member.accent} shadow-lg`}
        >
          <member.icon className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="type-h3 text-white">
          {member.name}
        </h3>
        <span className="type-caption mt-2 inline-block w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-0.5 font-medium leading-snug text-cyan-400">
          {member.role}
        </span>
        <p className="type-body-sm mt-4 flex-1 text-text-cool">
          {member.description}
        </p>
      </div>
    </div>
  );
}
