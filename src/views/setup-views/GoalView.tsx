import SetupLayout from '../../components/layouts/SetupLayout';
import GoalForm from '../../components/user-setup/GoalForm';

const GoalView = () => {
  return (
    <SetupLayout
      title={'What Is Your Goal?'}
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    >
      <GoalForm />
    </SetupLayout>
  );
};

export default GoalView;
