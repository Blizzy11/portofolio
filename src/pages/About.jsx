import React from 'react'
import Tailwind from '../assets/tailwind-css.png';


const About = () => {
  return (
    <div className='bg-slate-100'>
      <figure class="md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800 max-w-[1366px] mx-auto">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={Tailwind} alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium text-black">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
  </figure>
  </div>
  )
}

export default About