import CountingCard from '../../components/Card/CountingCard';
import FullBoardCard from '../../components/Card/BoardCard/FullBoardCard';
import SummaryBoardCard from '../../components/Card/BoardCard/SummaryBoardCard';
import ProfileCard from '../../components/Card/ProfileCard';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function Parceiros() {
  return (
    <>
      <SummaryBoardCard
        name='Fulano de Tal'
        image='summary-board-card-tantech'
      />
      <CountingCard text='Eventos realizados' count={10} />

      <FullBoardCard
        nameBoard='Tantech'
        description='Tantech é uma empresa de tecnologia que atua no mercado de desenvolvimento de softwares e aplicativos.'
      />

      <ProfileCard
        image='/profile-tantech.jpeg'
        role='Diretor(a)'
        name='Raphaela'
      />

      <SearchResults totalProducts={10} totalPages={1} />
    </>
  );
}
