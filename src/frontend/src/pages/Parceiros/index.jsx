import CountingCard from '../../components/CountingCard';
import FullBoardCard from '../../components/FullBoardCard';
import SummaryBoardCard from '../../components/SummaryBoardCard';
import ProfileCard from '../../components/ProfileCard';

export default function Parceiros() {
  return (
    <>
      <SummaryBoardCard 
        name="Fulano de Tal" 
        image="summary-board-card-tantech"
      />
      <CountingCard 
        text="Eventos realizados"
        count={10}
      />

      <FullBoardCard 
        nameBoard="Tantech"
        description="Tantech é uma empresa de tecnologia que atua no mercado de desenvolvimento de softwares e aplicativos."
      />

      <ProfileCard
        image="/profile-tantech.jpeg"
        role="Diretor(a)"
        name="Raphaela"
      />
    </>
  );
}
