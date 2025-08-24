import React from "react";

// You can customize the gradient and SVG as you like

const BackgroundArt: React.FC = () => (
  <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-treepurple-100 via-treegreen-100 to-treegreen-200 overflow-hidden">
    {/* Tree/leaf SVG motif inspired by logo */}
    <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-25" width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="180" rx="80" ry="20" fill="#aed581" />
      <path d="M100 180 Q110 120 100 60 Q90 120 100 180 Z" fill="#7e57c2" />
      <circle cx="100" cy="60" r="18" fill="#7e57c2" />
      {/* Leaves */}
      <ellipse cx="80" cy="40" rx="12" ry="6" fill="#8bc34a" />
      <ellipse cx="120" cy="40" rx="12" ry="6" fill="#8bc34a" />
      <ellipse cx="65" cy="70" rx="10" ry="5" fill="#9ccc65" />
      <ellipse cx="135" cy="70" rx="10" ry="5" fill="#9ccc65" />
      <ellipse cx="55" cy="100" rx="8" ry="4" fill="#aed581" />
      <ellipse cx="145" cy="100" rx="8" ry="4" fill="#aed581" />
    </svg>
  </div>
);

export default BackgroundArt;
