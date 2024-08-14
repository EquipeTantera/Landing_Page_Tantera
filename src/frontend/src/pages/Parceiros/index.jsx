import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import MainTitle from '../../components/MainTitle';
import VerticalSubtitle from '../../components/VerticalSubtitle';

export default function Parceiros() {
  return (
    <>
      <MainTitle
        shadowText="Parceiros"
        mainText="Parceiros"
      />
      <VerticalSubtitle 
        title="Presidência"
        imageBackground="red"
        subtitle="presidência"
      />
      <HorizontalSubtitle title='teste teste' colorImage='red' tag={false} />
    </>
  );
}
