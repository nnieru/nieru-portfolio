import { ReactNode } from "react";

interface ISkill {
  key: string;
  label: string;
  icon?: ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

const skillData: ISkill[] = [
  {
    key: "react",
    label: "React",
  },
  {
    key: "react-native",
    label: "React Native",
  },
  {
    key: "ios",
    label: "iOS",
  },
  {
    key: "laravel",
    label: "Laravel",
  },
  {
    key: "expressjs",
    label: "Express Js",
  },
  {
    key: "python",
    label: "Python",
  },
  {
    key: "tailwindcss",
    label: "Tailwind CSS",
  },
  {
    key: "php",
    label: "PHP",
  },
  {
    key: "javascript",
    label: "Javascript",
  },
  {
    key: "typescript",
    label: "Typescript",
  },
];

export { skillData, type ISkill };
