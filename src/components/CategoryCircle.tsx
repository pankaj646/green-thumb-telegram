
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CategoryCircleProps {
  name: string;
  image: string;
  path: string;
  icon?: React.ReactNode;
}

const CategoryCircle = ({ name, image, path, icon }: CategoryCircleProps) => {
  // Scroll to top when category is clicked
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link 
      to={path} 
      className="flex flex-col items-center justify-center group"
      onClick={handleClick}
    >
      <div className="relative mb-3 transition-all duration-300 group-hover:scale-105">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-leaf-200 bg-white shadow-md group-hover:shadow-leaf group-hover:border-leaf-300 transition-all duration-300">
          <div className="w-full h-full bg-gradient-to-br from-leaf-50 to-leaf-100 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        {icon && (
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-leaf-100">
            {icon}
          </div>
        )}
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </Link>
  );
};

export default CategoryCircle;
