import PageWrapper from '../../components/PageWrapper';
import SetupViewImage from '../../assets/images/setup-first-screen.png';
import BasicButton from '../../components/ui/BasicButton';
import { ROUTES } from '../../constants';

const SetupView = () => {
  return (
    <PageWrapper>
      <div className={'relative -mt-10 h-[463px] min-h-[400px] w-full'}>
        <img
          src={SetupViewImage}
          alt="Setup View Image"
          className={'absolute h-full w-full object-cover sm:object-none'}
        />
      </div>
      <h1
        className={
          'text-acid mx-auto max-w-[328px] py-8 text-center text-2xl font-medium'
        }
      >
        Consistency Is the Key To progress. Don't Give Up!
      </h1>
      <div className={'bg-light-purple mb-10 px-8 py-9 text-center'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <BasicButton
        buttonText={'Next'}
        redirectPath={ROUTES.USER_SET_UP.GENDER}
      />
    </PageWrapper>
  );
};

export default SetupView;
