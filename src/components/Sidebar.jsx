import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-full mr-6 bg-white rounded-lg">
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold text-purple mb-6">Settings</h3>
        <div className="border-l-4 border-purple pl-4 mb-4">
          <h4 className="text-md text-purple font-semibold mb-2">
            Payment information
          </h4>
          <ul className="space-y-1">
            <li className="text-purple hover:text-myPurpleHover transition-colors">
              Payment method
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-2">Transaction history</h4>
          <ul className="space-y-1">
            <li className="hover:text-myPurpleHover transition-colors">
              Payments
            </li>
            <li className="hover:text-myPurpleHover transition-colors">
              Payouts
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-2">Account settings</h4>
          <ul className="space-y-1">
            <li className="hover:text-myPurpleHover transition-colors">
              Password
            </li>
            <li className="hover:text-myPurpleHover transition-colors">
              Delete account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
