import CustomCheckbox from '../ui/CustomCheckbox';
import { activities } from '../../constants/activities.constants';
import useActiveCheckbox from '../../hooks/useActiveCheckbox';
import { BUTTON_TEXTS } from '../../constants';
import BasicButton from '../ui/BasicButton';

const ActivityForm = () => {
  const { selectedItemId, handleSelect } = useActiveCheckbox();

  return (
    <form className={'justify-center rounded-[38px]'}>
      <div className="mb-12 mt-[114px] flex flex-col items-center gap-8">
        {activities.map(activity => (
          <CustomCheckbox
            key={activity.id}
            label={activity.name}
            checked={selectedItemId === activity.id}
            onChange={() => handleSelect(activity.id)}
            type="radio"
            containerClassName={`justify-center py-5 rounded-[38px] ${selectedItemId === activity.id ? 'bg-acid text-main-black' : 'bg-white text-dark-purple'}`}
            textClassName={`text-2xl font-medium`}
          />
        ))}
      </div>

      <BasicButton buttonText={BUTTON_TEXTS.CONTINUE} disabled={false} />
    </form>
  );
};

export default ActivityForm;
