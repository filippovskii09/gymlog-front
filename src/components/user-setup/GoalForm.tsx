import BasicButton from '../ui/BasicButton';
import { BUTTON_TEXTS } from '../../constants';
import CustomCheckbox from '../ui/CustomCheckbox';
import useActiveCheckbox from '../../hooks/useActiveCheckbox';
import { goals } from '../../constants/goals.constants';

const GoalForm = () => {
  const { selectedItemId, handleSelect } = useActiveCheckbox();

  return (
    <form>
      <div className="bg-light-purple my-9 flex flex-col gap-7 px-8 py-11">
        {goals.map(goal => (
          <CustomCheckbox
            key={goal.id}
            label={goal.name}
            checked={selectedItemId === goal.id}
            onChange={() => handleSelect(goal.id)}
            type="radio"
            containerClassName={`justify-between px-3 py-2.5 rounded-[36px] border border-white pl-7 
            ${selectedItemId === goal.id ? 'bg-main-black' : 'bg-white text-black'}`}
            textClassName="text-lg font-normal"
            iconClassName="w-[34px] h-[34px]"
          />
        ))}
      </div>
      <BasicButton buttonText={BUTTON_TEXTS.CONTINUE} disabled={false} />
    </form>
  );
};

export default GoalForm;
