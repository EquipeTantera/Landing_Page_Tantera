import { useState } from 'react';
import styles from './styles.module.scss';
import CarouselCard from '../../components/Carousels/CarouselCard';
import ResultInformationCard from '../../components/Card/InformationCard/ResultInformationCard';
import ManagementInformationCard from '../../components/Card/InformationCard/ManagementInformationCard';
import FormCard from '../../components/Card/FormCard';
import Pagination from '../../components/Pagination';
import CarouselLargePartner from '../../components/Carousels/CarouselLargePartnerCard';


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

  const partnersData = [
    {
      name: 'Parceiro 1',
      description: 'Descrição do Parceiro 1',
      image: 'https://example.com/image1.jpg',
      fullImage: 'https://example.com/fullImage1.jpg',
      events: [{ name: 'Evento 1', date: '2024-09-17' }],
      impacts: [{ name: 'Impacto 1' }],
      textButton: 'Saiba Mais',
      linkButton: '/parceiro1',
    },
    {
      name: 'Parceiro 2',
      description: 'Descrição do Parceiro 2',
      image: 'https://example.com/image2.jpg',
      fullImage: 'https://example.com/fullImage2.jpg',
      events: [{ name: 'Evento 2', date: '2024-09-18' }],
      impacts: [{ name: 'Impacto 2' }],
      textButton: 'Saiba Mais',
      linkButton: '/parceiro2',
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

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <FormCard 
            title="Formulário de Contato" 
            inputs={inputs} 
            textButton="Enviar"
            linkButton="/submit"
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

          <CarouselLargePartner partners={partnersData} />
          
        </section>
      </div>
    </>
  );
}
