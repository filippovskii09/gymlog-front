import { BUTTON_TEXTS, GENDERS } from '../../constants';
import MaleGenderIcon from '../icons/MaleGenderIcon';
import FemaleGenderIcon from '../icons/FemaleGenderIcon';
import { useState } from 'react';
import BasicButton from '../ui/BasicButton';
import CustomCheckbox from '../ui/CustomCheckbox';
import { cn } from '../../utils/cn.util';
import Subtitle from '../ui/Subtitle';

const GenderForm = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <form action="">
      <div className={'mb-11 flex flex-col items-center gap-5'}>
        <CustomCheckbox
          label={GENDERS.MALE}
          checked={selectedGender === GENDERS.MALE}
          onChange={() => setSelectedGender(GENDERS.MALE)}
          type="radio"
          containerClassName={cn(
            'relative flex h-[163px] w-[163px] items-center justify-center rounded-full',
            selectedGender === GENDERS.MALE
              ? 'bg-acid border-none'
              : 'border border-white bg-[#373737]'
          )}
          textClassName="text-xl font-bold text-center"
        >
          <MaleGenderIcon checked={selectedGender === GENDERS.MALE} />
        </CustomCheckbox>
        <Subtitle title={GENDERS.MALE} />

        <CustomCheckbox
          label={GENDERS.FEMALE}
          checked={selectedGender === GENDERS.FEMALE}
          onChange={() => setSelectedGender(GENDERS.FEMALE)}
          type="radio"
          containerClassName={cn(
            'relative flex h-[163px] w-[163px] items-center justify-center rounded-full',
            selectedGender === GENDERS.FEMALE
              ? 'bg-acid border-none'
              : 'border border-white bg-[#373737]'
          )}
          textClassName="text-xl font-bold text-center"
        >
          <FemaleGenderIcon checked={selectedGender === GENDERS.FEMALE} />
        </CustomCheckbox>
        <Subtitle title={GENDERS.FEMALE} />
      </div>

      <BasicButton buttonText={BUTTON_TEXTS.CONTINUE} disabled={false} />
    </form>
  );
};
export default GenderForm;
