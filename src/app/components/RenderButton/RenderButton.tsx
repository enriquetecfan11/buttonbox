"use client";

import React from "react";
import Image from "next/image";
import { runCommandAction } from "@/app/actions/run-command-action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";

interface Props {
  name: string;
  icon: string | undefined;
  description: string | undefined;
}

export const RenderButton: React.FC<Props> = ({ name, icon, description }) => {
  const handleClick = async (name: string) => {
    const result = await runCommandAction(name);
    if (result.success) {
      toast.success(`Success: ${result.message}`, {
        className: "custom-toast",
      });
    } else {
      toast.error(`Error: ${result.message}`, {
        className: "custom-toast",
      });
    }
  };

  return (
    <button
      onClick={() => handleClick(name)}
      className="focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="shadow-2xl bg-slate-600 flex flex-col gap-3 p-6 items-center justify-center text-center rounded-xl min-h-40 md:min-h-48 md:min-w-48">
        {icon && (
          <div className="bg-white rounded-full p-3 mb-3 shadow-inner">
            <Image
              src={icon}
              height={60}
              width={60}
              alt={name}
              className="rounded-full"
            />
          </div>
        )}
        <p className="text-white text-lg">{name}</p>
        {description && <p className="text-white text-sm">{description}</p>}
      </div>
    </button>
  );
};
