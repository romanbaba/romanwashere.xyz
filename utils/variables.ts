import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Haberler',
    description: 'It allows you to view local news via Discord.',
    link: 'https://bit.ly/haberlerbot',
    iconURL: 'https://cdn.discordapp.com/icons/1147505872625483819/a46ed5606785cf436c5c65c320de6cb7.png',
  },
  {
    name: 'Raven',
    description: 'It provides access to free projects and codes.',
    link: 'https://discord.gg/altyapilar',
    iconURL: 'https://cdn.discordapp.com/icons/1096085223881576549/659a570c79e73521fbebe5fb56dda08f.png',
  },
];

export const githubUsername = 'romanbaba';
export const discordId = '341585045397438464';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/romanbabba',
    iconURL: BsInstagram,
  },
  {
    name: 'X',
    link: 'https://twitter.com/ewgsta',
    iconURL: BsTwitterX,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Tailwindcss',
    iconURL: SiTailwindcss,
  },
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Firebase',
    iconURL: SiFirebase,
  },
];
