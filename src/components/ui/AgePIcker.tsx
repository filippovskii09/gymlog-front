import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BackArrowIcon } from '../icons/BackArrowIcon';

const AgePicker = () => {
  const minAge = 16;
  const maxAge = 70;
  const [selectedAge, setSelectedAge] = useState(28);
  const [touchStart, setTouchStart] = useState(0);

  const handlePrev = useCallback(() => {
    setSelectedAge(prev => (prev > minAge ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedAge(prev => (prev < maxAge ? prev + 1 : prev));
  }, []);

  const handleTouchStart = (event: TouchEvent) => {
    const touch = event.touches[0];
    setTouchStart(touch.clientY);
  };

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touch = event.touches[0];
      const touchEnd = touch.clientY;
      const touchDifference = touchStart - touchEnd;

      if (touchDifference > 30) {
        handleNext();
      } else if (touchDifference < -30) {
        handlePrev();
      }
    },
    [touchStart, handlePrev, handleNext] // Make sure to include touchStart in dependency array
  );

  useEffect(() => {
    const element = document.getElementById('age-picker');
    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);

      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [handleTouchStart, handleTouchMove]);

  return (
    <div
      id="age-picker"
      className="flex w-full touch-none flex-col items-center text-white"
    >
      {/* Велике число зверху */}
      <div className="mb-8 text-6xl font-bold">{selectedAge}</div>
      <BackArrowIcon xl top />

      {/* Контейнер для вибору */}
      <div className="bg-light-purple mt-6 flex h-24 w-full items-center justify-center">
        <div className="relative flex w-full max-w-[400px] items-center justify-between">
          {[...Array(5)].map((_, index) => {
            const age = selectedAge + index - 2;
            const isActive = age === selectedAge;
            const isNearActive =
              age === selectedAge - 1 || age === selectedAge + 1;
            return (
              <motion.div
                key={age}
                className={`px-2 text-[25px] font-bold text-[#4E4966] transition-all duration-300 ${
                  isActive
                    ? 'text-[40px] font-bold text-white'
                    : isNearActive
                      ? 'text-[35px] text-[#554F70] opacity-90'
                      : age < minAge || age > maxAge
                        ? ''
                        : 'opacity-70'
                }`}
              >
                {age >= minAge && age <= maxAge ? age : ''}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgePicker;
