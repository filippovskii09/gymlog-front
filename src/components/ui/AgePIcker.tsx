import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BackArrowIcon } from '../icons/BackArrowIcon';

const AgePicker = () => {
  const minAge = 16;
  const maxAge = 70;
  const [selectedAge, setSelectedAge] = useState(28);
  const [touchStart, setTouchStart] = useState(0);

  const handlePrev = () => {
    setSelectedAge(prev => (prev > minAge ? prev - 1 : prev));
    console.log(selectedAge);
  };

  const handleNext = () => {
    setSelectedAge(prev => (prev < maxAge ? prev + 1 : prev));
  };

  const handleTouchStart = event => {
    const touch = event.touches[0];
    setTouchStart(touch.clientY);
  };

  const handleTouchMove = event => {
    const touch = event.touches[0];
    const touchEnd = touch.clientY;
    if (touchStart - touchEnd > 30) {
      handleNext();
    } else if (touchEnd - touchStart > 30) {
      handlePrev();
    }
  };

  useEffect(() => {
    const element = document.getElementById('age-picker');

    element?.addEventListener('touchstart', handleTouchStart);
    element?.addEventListener('touchmove', handleTouchMove);

    return () => {
      element?.removeEventListener('touchstart', handleTouchStart);
      element?.removeEventListener('touchmove', handleTouchMove);
    };
  }, [touchStart]);

  return (
    <div
      id="age-picker"
      className="flex w-full flex-col items-center text-white"
    >
      {/* Велике число зверху */}
      <div className="mb-8 text-6xl font-bold">{selectedAge}</div>
      <BackArrowIcon xl top />

      {/* Контейнер для вибору */}
      {/* Кнопка "Назад" */}
      {/*<button*/}
      {/*  className="absolute left-0 z-50 px-2 py-1 bg-gray-800 rounded-full"*/}
      {/*  onClick={handlePrev}>*/}
      {/*  &#60;*/}
      {/*</button>*/}

      {/* Смуга з числами */}
      <div
        className={
          'bg-light-purple mt-6 flex h-24 w-full items-center justify-center'
        }
      >
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

      {/* Кнопка "Вперед" */}
      {/*<button*/}
      {/*  className="absolute right-0 px-2 py-1 bg-gray-800 rounded-full"*/}
      {/*  onClick={handleNext}>*/}
      {/*  &#62;*/}
      {/*</button>*/}
    </div>
  );
};

export default AgePicker;
