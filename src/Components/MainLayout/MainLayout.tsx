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
    <div className="container mx-auto p-4">
      {/* title div */}
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl text-black font-bold">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-[16px] text-[#64748B] font-normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* main content div */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-3">
          <TechList
            technologies={technologies}
            selected={selected}
            handleAdd={handleAdd}
          />
        </div>

        {/* for Stack */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-xl p-4 sticky top-4">
            <h2 className="text-lg font-bold text-black">Your Stack</h2>
            <p className="text-sm text-[#64748B] mb-4">
              {selected.length === 0
                ? "No technologies selected yet"
                : `${selected.length} Technology Selected`}
            </p>

            {selected.length === 0 ? (
              <div className="border border-dashed border-gray-300 rounded-lg py-8 text-center text-sm text-gray-400">
                Your stack is empty
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {selected.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-2"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6"
                      />
                      <div>
                        <p className="text-sm font-semibold">{tech.name}</p>
                        <p className="text-xs text-[#64748B]">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="text-gray-400 hover:text-red-500 px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <button
                  onClick={handleRemoveAll}
                  className="w-full border border-red-400 text-red-500 rounded-lg py-2 text-sm font-semibold hover:bg-red-50"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
