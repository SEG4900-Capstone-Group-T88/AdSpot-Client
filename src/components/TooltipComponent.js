// components/TooltipComponent.js
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const TooltipComponent = ({ title, content }) => {
  return (
    <Tooltip
      content={
        <div className="w-80">
          <Typography color="white" className="font-medium">
            {title}
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            {content}
          </Typography>
        </div>
      }
    >
      <InformationCircleIcon
        strokeWidth={2}
        className="text-blue-gray-500 w-5 h-5 cursor-pointer"
      />
    </Tooltip>
  );
};