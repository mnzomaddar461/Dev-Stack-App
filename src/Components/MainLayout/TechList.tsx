import type { Technology } from "../../Types/TechType";
import TechCard from "./TechCard";

type Props = {
  technologies: Technology[];
  selected: Technology[];
  handleAdd: (tech: Technology) => void;
};

const TechList = ({ technologies, selected, handleAdd }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => {
        const isSelected = selected.some((item) => item.id === tech.id);
        const isDisabled = selected.some(
          (item) => item.id === tech.id
        );

        return (
          <TechCard
            key={tech.id}
            tech={tech}
            isSelected={isSelected}
            isDisabled={isDisabled}
            handleAdd={handleAdd}
          />
        );
      })}
    </div>
  );
};

export default TechList;