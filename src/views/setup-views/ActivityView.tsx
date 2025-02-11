import SetupLayout from '../../components/layouts/SetupLayout';
import ActivityForm from '../../components/user-setup/ActivityForm';

const ActivityView = () => {
  return (
    <SetupLayout
      title={'Physical Activity Level'}
      text={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usermod tempor incident ut labor et color magna aliquot. '
      }
    >
      <ActivityForm />
    </SetupLayout>
  );
};

export default ActivityView;
