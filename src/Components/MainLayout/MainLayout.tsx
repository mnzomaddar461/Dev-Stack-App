import { useState } from "react";
import type { Technology } from "../../Types/TechType";
import TechList from "./TechList";
import { toast } from "react-toastify";

type Props = {
  technologies: Technology[];
};

const MainLayout = ({ technologies }: Props) => {
  const [selected, setSelected] = useState<Technology[]>([]);

  const handleAdd = (tech: Technology) => {
    const exists = selected.find((item) => item.id === tech.id);
    if (exists) return;
    setSelected([...selected, tech]);
    toast.success(`${tech.name} is add successfull.`)
  };

  const handleRemove = (id: string) => {
    setSelected(selected.filter((item) => item.id !== id));
    toast.error(`Items remove from Stack`)
  };

  const handleRemoveAll = () => {
    setSelected([]);
    toast.warning(`Remove all items from stack`)
  }

  return (
        <div>
            <h2> content area </h2>
        </div>
  );
};

export default MainLayout;
