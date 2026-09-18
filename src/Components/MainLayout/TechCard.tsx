import type { Technology } from "../../Types/TechType";

type Props = {
  tech: Technology;
  isSelected: boolean;
  isDisabled: boolean;
  handleAdd: (tech: Technology) => void;
};

const TechCard = ({ tech, isSelected, isDisabled, handleAdd }: Props) => {
  return (
    <div className={`border rounded-xl p-4 flex flex-col h-full transition-colors ${isSelected ? "border-pink-500 border-2" : "border-gray-200"}`}>
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className="text-[11px] font-semibold text-pink-500 bg-pink-50 px-2 py-1 rounded">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-black mt-3">{tech.name}</h3>
      <p className="text-sm text-[#64748B] mt-1">{tech.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {tech.category}
          </span>
          <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {tech.difficulty}
          </span>
        </div>
        <span className="text-xs text-gray-600">⭐ {tech.rating}</span>
      </div>

      <button
        onClick={() => handleAdd(tech)}
        disabled={isDisabled}
        className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold ${
          isDisabled
            ? "bg-pink-100 text-pink-500 border border-pink-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
