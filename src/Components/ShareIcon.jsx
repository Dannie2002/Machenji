import React from 'react';

/**
 * ShareIcon component - A reusable sharing/redirect arrow icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.color - The fill color of the icon (defaults to currentColor)
 * @param {number|string} props.size - The width and height of the icon
 * @param {string} props.className - Additional Tailwind CSS classes
 */
const ShareIcon = ({ color = "currentColor", size = 24, className = "", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="144 144 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <defs>
          <clipPath id="a">
            <path d="m200 148.09h400v503.81h-400z" />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path d="m597.87 243.63-170.91-95.035c-1.2383-0.6875-2.7461-0.66797-3.9688 0.046875-1.2227 0.71875-1.9727 2.0273-1.9727 3.4453v45.738c-122.19 4.3359-220.94 105.34-220.94 226.96 0 60.27 23.945 117.2 67.43 160.3 43.473 43.086 100.89 66.82 161.67 66.82 2.0938 0 3.832-1.6133 3.9883-3.7031s-1.3242-3.9414-3.3945-4.25c-85.992-12.855-150.84-87.535-150.84-173.71 0-83.969 59.465-155.64 142.08-172.18v44.086c0 1.418 0.75 2.7266 1.9727 3.4453 1.2188 0.71875 2.7305 0.73438 3.9688 0.046875l170.91-95.023c1.2695-0.70703 2.0547-2.043 2.0547-3.4961 0-1.4453-0.78516-2.7852-2.0547-3.4922z" />
        </g>
      </g>
    </svg>
  );
};

export default ShareIcon;