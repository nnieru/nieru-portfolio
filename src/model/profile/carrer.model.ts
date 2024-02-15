interface ICareer {
  companyLogo?: string;
  companyName: string;
  jobTitle: string;
  startYear: string;
  endYear: string;
  jobDescription: string;
  skills: string[];
  priority: number;
}

const careerData: ICareer[] = [
  {
    companyName: "Anteraja",
    jobTitle: "iOS Developer (Outsource)",
    startYear: "2022",
    endYear: "2023",
    jobDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi hicillum dignissimos impedit delectus ullam iusto quidem, earum sequi. Aliquid, placeat ab perferendis quisquam error incidunt, enim, aperiam rerum dolorum reiciendis illum excepturi? Ullam hic nulla excepturi magnam, at corrupti dolores sit culpa eveniet corporis officia, odio a iusto molestias.",
    skills: ['UIKit', 'Swift', 'iOS Development'],
    priority: 2,
  },
  {
    companyName: "Binus IT Division",
    jobTitle: "Senior Programmer",
    startYear: "2023",
    endYear: "Present",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi hicillum dignissimos impedit delectus ullam iusto quidem, earum sequi. Aliquid, placeat ab perferendis quisquam error incidunt, enim, aperiam rerum dolorum reiciendis illum excepturi? Ullam hic nulla excepturi magnam, at corrupti dolores sit culpa eveniet corporis officia, odio a iusto molestias.",
    skills: ['UIKit', 'Swift', 'React', 'React Native', 'Laravel', 'Code Igniter', 'PHP', 'Typescript', 'Javascript'],
    priority: 1,
  },
];

// sorted career data ascending
careerData.sort((a,b) => a.priority - b.priority)

export { careerData,type ICareer };
