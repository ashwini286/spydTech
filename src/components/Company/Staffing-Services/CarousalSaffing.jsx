import React from 'react';

const data = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    quote: 'I may not show it but I can\'t live without .',
    imageUrl: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080'
  },
  // Add more data objects as needed
];

function CarousalSaffing() {
  return (
    <div className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300 border-2 h-[150px] rounded-lg">
          <p className='text-center py-5'>{person.quote}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img src={person.imageUrl} alt="" className="flex-none w-20 h-20 rounded-full border-2 border-pink-700 object-cover" loading="lazy" decoding="async" />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-200">{person.name}</div>
            <div className="mt-0.5 dark:text-slate-300">{person.role}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}



export default CarousalSaffing;
