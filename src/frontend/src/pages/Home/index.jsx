import { useState } from 'react';
import styles from './styles.module.scss';
import CarouselCard from '../../components/Carousels/CarouselCard';
import ResultInformationCard from '../../components/Card/InformationCard/ResultInformationCard';
import ManagementInformationCard from '../../components/Card/InformationCard/ManagementInformationCard';
import FormCard from '../../components/Card/FormCard';
import Pagination from '../../components/Pagination';
import CarouselProfileCard from '../../components/CarouselProfileCard';
import MediumEventCard from '../../components/Card/MediumEventCard';
import Accordion from '../../components/Accordion';
import CarouselLargePartner from '../../components/Carousels/CarouselLargePartnerCard';
import LargePartnerCard from '../../components/Card/LargeCard/LargePartnerCard';

export default function Home() {
  const directorsData = [
    { name: 'Chefe querida', photo: '/profile-tantech.jpeg' },
    { name: 'Raissa doida de bala', photo: 'photo-small-card.png' },
    { name: 'Sdds Copa', photo: 'copa-inteli.png' },
  ];

  const inputs = [
    { type: 'text', placeholder: 'Seu nome', label: 'Nome' },
    { type: 'text', placeholder: 'Seu email', label: 'Email' },
    {
      type: 'select', placeholder: 'Selecione uma opção', label: 'Selecione', options: [
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

  const faqItems = [
    {
      buttonText: "Por que eu deveria assinar o plano de sócios?",
      panelText: "Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil.",
      colorImage: "black"
    },
    {
      buttonText: "O plano de sócio atleta tem alguma carência ou contrato mínimo?",
      panelText: "Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil.",
      colorImage: "red"
    },
    {
      buttonText: "Os treinos de futebol são para todos os níveis?",
      panelText: "Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil.",
      colorImage: "black"
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>


          <div className={styles.container__teste}>
            <CarouselProfileCard directors={directorsData} />
          </div>

          <FormCard
            title="Formulário de Contato"
            inputs={inputs}
            textButton="Enviar"
            linkButton="/submit"
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

          <MediumEventCard 
            title="Evento Furioso"
            description="Evento da empresa Furioso"
            image="/partner-furioso-full.png"
            address='Rua Furiosa, 123'
            date="10/09/2023"
            ticket="01/01/01"
            buttonText="Saiba mais"
            linkButton="/comprar"
          />

          <CarouselLargePartner partners={partnersData} />

          <Accordion items={faqItems} />

        </section>
      </div>
    </>
  );
}
