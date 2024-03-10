import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

const PaymentMethodCard = ({ cardType, lastFourDigits, expiryDate }) => {
  return (
    <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg mb-4">
      <div className="flex items-center">
        <div>
          <p className="text-sm text-gray-800">
            <FontAwesomeIcon
              icon={faCcVisa}
              className="mr-2 text-[blue]"
              size="xl"
            />
            {cardType} ending in {lastFourDigits}
          </p>
          <p className="text-sm text-gray-600">Expires {expiryDate}</p>
        </div>
      </div>
      <button className="bg-purple text-white px-4 py-1 rounded hover:bg-myPurpleHover transition-colors">
        Default
      </button>
    </div>
  );
};

export default PaymentMethodCard;
