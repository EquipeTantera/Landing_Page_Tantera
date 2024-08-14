import CountingCard from '../../components/CountingCard';
import SummaryBoardCard from '../../components/SummaryBoardCard';

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
    </>
  );
}
