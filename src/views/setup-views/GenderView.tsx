import GenderForm from '../../components/user-setup/GenderForm';
import SetupLayout from '../../components/layouts/SetupLayout';

const GenderView = () => {
  return (
    <SetupLayout title={'What’s Your Gender'}>
      <GenderForm />
    </SetupLayout>
  );
};

export default GenderView;
