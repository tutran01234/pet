import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="md:min-w-1/8 min-w-full py-3 px-5 text-base font-medium font-inter border-none rounded-md bg-amber-500  box-border transition-opacity ease-in-out cursor-pointer hover:opacity-70 focus:outline-none focus:shadow-shadowButton disabled:opacity-50 disabled:cursor-wait"
    >
      {children}
    </button>
  );
}
