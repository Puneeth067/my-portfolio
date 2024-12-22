import React, { useState, useEffect, Suspense } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechnologies, setVisibleTechnologies] = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const chunkSize = 12;

  useEffect(() => {
    // Initialize with first chunk
    setVisibleTechnologies(technologies.slice(0, chunkSize));

    const interval = setInterval(() => {
      // Start transition
      setTransitioning(true);

      // Update technologies after fade out
      setTimeout(() => {
        setVisibleTechnologies(prev => {
          const currentIndex = technologies.findIndex(tech => tech.name === prev[0].name);
          const nextIndex = (currentIndex + 1) % technologies.length;
          const endIndex = Math.min(nextIndex + chunkSize, technologies.length);
          
          if (nextIndex + chunkSize > technologies.length) {
            return [...technologies.slice(nextIndex), ...technologies.slice(0, chunkSize - (technologies.length - nextIndex))];
          }
          
          return technologies.slice(nextIndex, endIndex);
        });

        // End transition
        setTransitioning(false);
      }, 500); // Half of the transition duration
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {visibleTechnologies.map((technology) => (
        <div 
          className={`w-28 h-28 transition-all duration-1000 ease-in-out transform
            ${transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} 
          key={technology.name}
        >
          <Suspense fallback={
            <div className='w-full h-full flex items-center justify-center'>
              <div className='w-16 h-16 rounded-full bg-gray-700 animate-pulse' />
            </div>
          }>
            <BallCanvas icon={technology.icon} autoRotateReset={true} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");