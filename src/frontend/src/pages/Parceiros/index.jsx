
import FullBoardCard from '../../components/FullBoardCard';
import SummaryBoardCard from '../../components/SummaryBoardCard';

export default function Parceiros() {
  return (
    <>
      <SummaryBoardCard 
        name="Fulano de Tal" 
        image="summary-board-card-tantech"
      />

      <FullBoardCard 
        nameBoard='Tantech'
        description='Tantech é uma empresa de tecnologia que atua no mercado de desenvolvimento de softwares e aplicativos.'
      />
    </>
  );
}
