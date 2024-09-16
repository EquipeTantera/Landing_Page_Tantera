import { useState } from 'react';
import styles from './styles.module.scss';
import CarouselCard from '../../components/CarouselCard';
import ResultInformationCard from '../../components/Card/InformationCard/ResultInformationCard';
import ManagementInformationCard from '../../components/Card/InformationCard/ManagementInformationCard';
import FilterButton from '../../components/Buttons/FilterButton';
import FormCard from '../../components/Card/FormCard';
import Pagination from '../../components/Pagination';
import FilterModal from '../../components/FilterModal';
import PlanningCard from '../../components/Card/PlanningCard';

export default function Home() {
  const inputs = [
    { type: 'text', placeholder: 'Seu nome', label: 'Nome' },
    { type: 'text', placeholder: 'Seu email', label: 'Email' },
    { type: 'select', placeholder: 'Selecione uma opção', label: 'Selecione', options: [
      { value: 'opcao1', label: 'Opção 1' },
      { value: 'opcao2', label: 'Opção 2' },
    ] 
    },
  ];

  const carouselCards = [
    {
      image: '/partner-furioso.png',
      event: 'Evento 1',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 2',
    },
    {
      image: '/partner-furioso.png',
      event: 'Evento 3',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 4',
    },
    {
      image: '/partner-furioso.png',
      event: 'Evento 5',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 6',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <FilterButton text="Filtrar" onClick={handleOpenModal}/>
          <div className={styles.teste}>
            <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
          <FilterButton text="Filtrar" />
          <LargeProductCard 
            name='Produto 1'
            description='Descrição do produto 1'
            fullImage='/partner-furioso-full.png'
            price={100.00}
            colors={['Azul', 'Vermelho', 'Verde']}
            textButton='Comprar'
            linkButton='/'
            sizes={['P', 'M', 'G']}
            images={[
              '/copa-inteli.png',
              '/partner-furioso.png',
              '/photo-small-card.png',
            ]}
          />
          <FormCard 
            title="Formulário de Contato" 
            inputs={inputs} 
            textButton="Enviar"
            linkButton="/submit"
          />
          <EventInformationCard 
            address='Rua dos Bobos, 0'
            dates={[
              {
                date: '01/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
              {
                date: '02/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
            ]}
            observation='Observação do evento'
            image='/copa-inteli.png'
          />

          <LargePartnerCard 
            name='Fulano de Tal'
            description='Fulano de Tal é uma empresa de tecnologia que atua no mercado de desenvolvimento de softwares e aplicativos.'
            fullImage='/partner-furioso-full.png'
            image='/partner-furioso.png'
            events={[
              {
                name: 'Evento 1',
                date: '01/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
              {
                name: 'Evento 2',
                date: '02/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
            ]}
            impacts={[
              { name: 'Impacto 1' },
              { name: 'Impacto 2' },
            ]}
            textButton='Conhecer a empresa'
            linkButton='/'
          />

          <LargeProductCard 
            name='Produto 1'
            description='Descrição do produto 1'
            fullImage='/product-1-full.png'
            price={100.00}
            colors={['Azul', 'Vermelho', 'Verde']}
            textButton='Comprar'
            linkButton='/'
            sizes={['P', 'M', 'G']}
            isAvailable={false}
          />
          <ResultInformationCard 
            results={[
              { name: 'Resultado 1' },
              { name: 'Resultado 2' },
              { name: 'Resultado 3' },
            ]}
            title='Resultados'
          />

          <ManagementInformationCard 
            termOfOffice='2021-2024'
            title='Resultados'
            results={[
              { name: 'Resultado 1' },
              { name: 'Resultado 2' },
              { name: 'Resultado 3' },
            ]}
          />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <CarouselCard cards={carouselCards} />
          <PlanningCard 
            activities={[
              { name: 'Atividade 1', completed: true },
              { name: 'Atividade 2', completed: false },
              { name: 'Atividade 3', completed: true },
              { name: 'Atividade 4', completed: false },
              { name: 'Atividade 5', completed: true },
              { name: 'Atividade 6', completed: false },
              {  name: 'Atividade 7', completed: true },
              { name: 'Atividade 8', completed: false },
              { name: 'Atividade 9', completed: true },
              { name: 'Atividade 10', completed: false }
            ]}
            boardImage='/summary-board-card-tantech.png'
            title='Planejamento'
          />
        </section>
      </div>
    </>
  );
}
