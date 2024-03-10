// components/TooltipComponent.js
import {Tooltip, Typography} from '@material-tailwind/react'
import {InformationCircleIcon} from '@heroicons/react/24/outline'

interface TooltipComponentProps {
  content: string
}

export const TooltipComponent = ({content}: TooltipComponentProps) => {
  return (
    <Tooltip
      content={
        <div className="w-80">
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
            placeholder={undefined}
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
  )
}
