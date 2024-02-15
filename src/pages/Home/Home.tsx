import { Card } from "../../components/card/Card";
import Pill from "../../components/Pill/Pill";
import { skillData } from "../../model/profile/skill.model";
import { careerData } from "../../model/profile/carrer.model";
import CareerCardItem from "./CareerCardItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4">
      {/* Profile picture */}
      <div className="w-1/2">
        <Card>
          <div className="p-4 w-full flex  flex-col justify-center gap-0">
            {/* foto */}
            <p className="text-center font-semibold text-xl">
              Nathaniel Andrian
            </p>
            <p className="text-center font-light text-md text-gray-400">
              Software Engineer
            </p>
          </div>
        </Card>
      </div>
      {/* About */}
      <div className="w-1/2">
        <Card>
          <div className="p-4  flex flex-col gap-2">
            {/* foto */}
           
            <p className="text-3xl font-semibold">About</p>
            <p className="text-md font-light text-gray-900">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium error nobis eaque, ipsum, culpa possimus eveniet quos
              magnam excepturi tempora quisquam harum facere libero modi
              corporis esse incidunt sequi voluptatem eligendi ratione pariatur
              sit quaerat at cupiditate. Eius repellendus eligendi sequi eaque
              ex cupiditate fugiat atque, suscipit cumque tempora illo delectus
              adipisci est iure quo tempore, temporibus laudantium numquam
              voluptatibus laboriosam earum odio exercitationem doloribus
              voluptate? Dolore et ratione impedit, beatae in laboriosam iure,
              culpa magni modi earum aut aliquam, blanditiis exercitationem
              numquam! Voluptatem nihil sapiente quam quisquam in? Repellendus
              ad ab alias. Quia illo ea fugit labore cumque facere.
            </p>
          </div>
        </Card>
      </div>

      {/* skills */}
      <div className="w-1/2">
        <Card>
          <div className="p-4 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skillData.map((skill) => (
                <Pill key={skill.key} text={skill.label} />
              ))}
            </div>
          </div>
        </Card>
      </div>
      
  
      {/* career */}
      <div className="w-1/2">
        <Card>
          <div className="p-4 flex flex-col gap-4">
            <p className="text-3xl font-semibold">Experiences</p>
            <div className="flex flex-col gap-6">
              {careerData.map((career, index) => (
                <CareerCardItem key={index} data={career}/>
              ))}
            </div>
          </div>
        </Card>
      </div>
      {/* education */}
    </div>
  );
}
