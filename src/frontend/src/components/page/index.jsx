import Header from '../Header';
import PropType from 'prop-types';

export default function Page({ children, backgroundColorHeader, backgroundMenuHeader }) {
  return (
    <>
      <Header background={backgroundColorHeader} backgroundMenu={backgroundMenuHeader}/>
      <main>
        {children}
      </main>
    </>
  );
}

Page.propTypes = {
  children: PropType.node.isRequired,
  backgroundColorHeader: PropType.string,
  backgroundMenuHeader: PropType.string,
};
