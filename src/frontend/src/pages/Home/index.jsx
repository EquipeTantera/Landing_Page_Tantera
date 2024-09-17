import { useState } from 'react';
import styles from './styles.module.scss';
import CarouselCard from '../../components/CarouselCard';
import ResultInformationCard from '../../components/Card/InformationCard/ResultInformationCard';
import ManagementInformationCard from '../../components/Card/InformationCard/ManagementInformationCard';
import FormCard from '../../components/Card/FormCard';
import Pagination from '../../components/Pagination';


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
          
        </section>
      </div>
    </>
  );
}
