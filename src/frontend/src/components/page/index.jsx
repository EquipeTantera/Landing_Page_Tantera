import Header from '../Header';
import PropType from 'prop-types';

export default function Page({ children, backgroundHeader }) {
  return (
    <>
      <Header background={backgroundHeader}/>
      <main>
        {children}
      </main>
    </>
  );
}

Page.propTypes = {
  children: PropType.node.isRequired,
  backgroundHeader: PropType.string,
};
