import PageWrapper from '../components/PageWrapper';
import AgePIcker from '../components/ui/AgePIcker';
import { Link } from 'react-router-dom';
import { pagesData } from '../pages/pagesData';

const HomeView = () => {
  return (
    <PageWrapper>
      <AgePIcker />

      <div className="flex flex-col gap-1">
        {pagesData.map(item => (
          <Link className={'text-sm underline'} key={item.path} to={item.path}>
            {item.title}
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
};

export default HomeView;
