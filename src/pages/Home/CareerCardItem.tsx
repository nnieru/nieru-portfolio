import Pill from "../../components/Pill/Pill";
import { ICareer } from "../../model/profile/carrer.model";

type Props = {
  data: ICareer;
};

export default function CareerCardItem({ data }: Props) {
  return (
    <div className="p-2 flex flex-row gap-4 ">
      <div className="w-14 h-14 flex-none bg-gray-300"></div>
      <div className="flex flex-col gap-1">
        <p className="text-md  font-semibold">{data.jobTitle}</p>

        {/* Company Name & Year */}
        <div>
          <span className="text-xs text-gray-600 font-medium">
            {data.companyName}
          </span>
          &nbsp;
          <span className="text-xs text-gray-600">|</span>
          &nbsp;
          <span className="text-xs text-gray-600 font-light">
            {data.startYear} - {data.endYear}
          </span>
        </div>

        <p className="text-xs text-gray-600">{data.jobDescription}</p>

        {/* Skill */}
        <div className="flex flex-wrap gap-1 py-1">
          {data.skills.map(skill => (<Pill text={skill} size="S"/>))}
        </div>
      </div>
    </div>
  );
}
