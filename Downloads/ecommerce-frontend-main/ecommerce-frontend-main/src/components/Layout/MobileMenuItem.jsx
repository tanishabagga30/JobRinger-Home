'use client';
import { useState } from 'react';

export default function MobileMenuItem({ item }) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="transition-colors duration-200">
      <div className="relative flex items-center justify-between">
        <a
          href={item.href}
          className="group hover:text-primary-500 transition-all ease-in-out  duration-500 relative w-full py-3 menu-item pl-5 pr-4 text-brand-dark"
        >
          <span className="block w-full">{item.label}</span>
        </a>

        {hasChildren && (
          <div
            className="cursor-pointer text-[17px] px-5 absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={() => setOpen(!open)}
          >
            <svg
              className={`transition-transform duration-200 ease-in-out ${
                open ? 'rotate-180' : ''
              }`}
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-9.4-9.4 0-24.6 0-34s9.4-9.4 33.9 0l127.1 127z" />
            </svg>
          </div>
        )}
      </div>

      {hasChildren && open && (
        <ul className="mobile-sub-menu pl-4">
          {item.children.map((child, index) => (
            <MobileMenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
