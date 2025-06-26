import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { colorClasses } from "../lib/constants";

interface SectionCardProps {
  title: string;
  icon: React.ElementType;
  sectionKey: string;
  children: React.ReactNode;
  color?: string;
  expanded: boolean;
  completed: boolean;
  onToggle: (sectionKey: string) => void;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  icon: Icon,
  sectionKey,
  children,
  color = "blue",
  expanded,
  completed,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div
        className={`bg-gradient-to-r ${(colorClasses as Record<string, string>)[color]} p-4 cursor-pointer transition-all duration-200 hover:shadow-md`}
        onClick={() => onToggle(sectionKey)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">{title}</h2>
            {completed && (
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </div>
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      {expanded && (
        <div className="p-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionCard; 