import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface Props {
  name: string;
  descripetion: string;
  tools: Array<string>;
  liveLink?: string;
  github?: string;
  featureImage?: any;
}

const ProjectCard: React.FC<Props> = ({
  name,
  descripetion,
  tools,
  liveLink,
  github,
  featureImage,
}) => {
  return (
    <div className=" border relative border-gray o">
      {featureImage && (
        <Image className="  w-full" src={featureImage} alt={name} />
      )}
      <div className=" flex p-3 items-center border border-gray">
        {tools.map(data => (
          <li className="text-base text-gray" key={data}>
            {data}
          </li>
        ))}
      </div>

      <div className="px-3  py-5 space-y-3">
        <div>
          <h3>{name}</h3>
          <p className=" ">{descripetion}</p>
        </div>
        <div className="   flex items-center gap-4">
          <Button
            link={liveLink}
            target="_blank"
            name="Live"
            type="primary"
            icon="<~>"
          />
          <Button
            link={github}
            target="_blank"
            name="Github"
            type="secondary"
            icon=">="
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
