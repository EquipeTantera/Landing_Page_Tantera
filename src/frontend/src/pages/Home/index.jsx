import styles from './styles.module.scss';
import PaperBackground from '../../components/PaperBackground';
import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import CountingCard from '../../components/Card/CountingCard';
import CarouselSmallProductCard from '../../components/Carousels/CarouselSmallProductCard';
import Content from '../../components/Content';
import Button from '../../components/Buttons/Button';
import CarouselLargePartnerCard from '../../components/Carousels/CarouselLargePartnerCard';
import Form from '../../components/Card/FormCard';
import { API_BASE_URL } from "../../services/config";
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Home() {
  const [impactCounts, setImpactCounts] = useState({
    eventosRealizados: 0,
    campeonatos: 0,
    quantidadeJogadores: 0,
  });

  const [impactsNames, setImpactsNames] = useState({
    participants: [],
    champions: [],
    events: [],
  });

  const events = [
    {
      title: 'Evento 1',
      description: 'Descrição do evento 1',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 2',
      description: 'Descrição do evento 2',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 3',
      description: 'Descrição do evento 3',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 4',
      description: 'Descrição do evento 4',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 5',
      description: 'Descrição do evento 5',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 6',
      description: 'Descrição do evento 6',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 7',
      description: 'Descrição do evento 7',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 8',
      description: 'Descrição do evento 8',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 9',
      description: 'Descrição do evento 9',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }, 
    {
      title: 'Evento 10',
      description: 'Descrição do evento 10',
      price: "10.00",
      image: 'copa-inteli.png',
      buttonText: 'Saiba mais',
      buttonPath: '/produtos'
    }
  ]

  const partners =[
    {
      title: 'Parceiro 1',
      description: 'Descrição do parceiro 1',
      image: 'partner-furioso.png',
      fullImage: 'partner-furioso-full.png',
      events: [
        {
          name: 'Evento 1',
          date: '01/01/2021'
        },
        {
          name: 'Evento 2',
          date: '02/01/2021'
        },
        {
          name: 'Evento 3',
          date: '03/01/2021'
        }
      ],
      impacts: [
        {
          name: 'Impacto 1'
        },
        {
          name: 'Impacto 2'
        },
        {
          name: 'Impacto 3'
        }
      ],
      textButton: 'Saiba mais',
      linkButton: '/produtos'
    },
    {
      title: 'Parceiro 2',
      description: 'Descrição do parceiro 2',
      image: 'partner-furioso.png',
      fullImage: 'partner-furioso-full.png',
      events: [
        {
          name: 'Evento 1',
          date: '01/01/2021'
        },
        {
          name: 'Evento 2',
          date: '02/01/2021'
        },
        {
          name: 'Evento 3',
          date: '03/01/2021'
        }
      ],
      impacts: [
        {
          name: 'Impacto 1'
        },
        {
          name: 'Impacto 2'
        },
        {
          name: 'Impacto 3'
        }
      ],
      textButton: 'Saiba mais',
      linkButton: '/produtos'
    },
    {
      title: 'Parceiro 3',
      description: 'Descrição do parceiro 3',
      image: 'partner-furioso.png',
      fullImage: 'partner-furioso-full.png',
      events: [
        {
          name: 'Evento 1',
          date: '01/01/2021'
        },
        {
          name: 'Evento 2',
          date: '02/01/2021'
        },
        {
          name: 'Evento 3',
          date: '03/01/2021'
        }
      ],
      impacts: [
        {
          name: 'Impacto 1'
        },
        {
          name: 'Impacto 2'
        },
        {
          name: 'Impacto 3'
        }
      ],
      textButton: 'Saiba mais',
      linkButton: '/produtos'
    }
  ]

  const formInputs = [
    {
      type: 'text',
      placeholder: 'Digite seu nome',
      label: 'Nome'
    },
    {
      type: 'text',
      placeholder: 'Digite seu e-mail',
      label: 'E-mail'
    },
    {
      type: 'select',
      placeholder: 'Selecione seu motivo de contato',
      options: [
        { value: 'motivo1', label: 'Motivo 1' },
        { value: 'motivo2', label: 'Motivo 2' },
        { value: 'motivo3', label: 'Motivo 3' },
      ],
      label: 'Motivo'
    },
    {
      type: 'textarea',
      placeholder: 'Digite sua mensagem',
      label: 'Mensagem'
    },
  ];

  // Função para buscar os dados de contagem do backend
  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/results?populate=*`);
        const impactData = response.data.data;
        const extractTitle = (description) => description.replace(/\d+/g, '').trim();

        const eventsQty = impactData.find(item => item.attributes.description.includes('Eventos'));
        const championsQty = impactData.find(item => item.attributes.description.includes('Campeonatos'));
        const participantsQty = impactData.find(item => item.attributes.description.includes('Quantidade de Impactados'));

        const participants = impactData.filter(item => item.attributes.description.includes('Quantidade de Impactados'))
                                        .map(item => extractTitle(item.attributes.description));
        const champions = impactData.filter(item => item.attributes.description.includes('Campeonatos'))
                                        .map(item => extractTitle(item.attributes.description));
        const events = impactData.filter(item => item.attributes.description.includes('Eventos'))
                                 .map(item => extractTitle(item.attributes.description));
        
        setImpactCounts({
          eventsQty: eventsQty ? parseInt(eventsQty.attributes.description) || 0 : 0,
          championsQty: championsQty ? parseInt(championsQty.attributes.description) || 0 : 0,
          participantsQty: participantsQty ? parseInt(participantsQty.attributes.description) || 0 : 0,
        });

        setImpactsNames({
          participants,
          champions,
          events,
        });
      } catch (error) {
        console.error('Erro ao buscar dados dos impactos:', error);
      }
    };

    fetchImpactData();
  }, []);

  return (
    <>
      <div className={styles.container__gif}>
        <img 
          src="./src/assets/gif/gif-tela-inicial.gif" 
          alt="GIF Tela Inicial"
          className={styles.container__gif__img} 
        />
      </div>
        <section className={styles.container__impacts}>
          <HorizontalSubtitle 
            title="Impactos da Atlética"
            colorImage='red'
          />

          <div className={styles.container__impacts__content}>
            <CountingCard 
              text={impactsNames.events[0] || 'Eventos Realizados'}
              count={impactCounts.eventsQty}
            />
            <CountingCard 
              text={impactsNames.champions[0] || 'Campeonatos Realizados'}
              count={impactCounts.championsQty}
            />
            <CountingCard 
              text={impactsNames.participants[0] || 'Impactados'}
              count={impactCounts.participantsQty}
            />
          </div>
        </section>

        <section className={styles.container__events}>
          <HorizontalSubtitle 
            title="Próximos Eventos"
            colorImage='purple'
          />

          <div className={styles.container__events__content}>
            <CarouselSmallProductCard 
              cards={events}
            />
          </div>
        </section>

        <section className={styles.container__management}>
          <HorizontalSubtitle 
            title="Gestão Atual"
            colorImage='red'
          />

          <div className={styles.container__management__content}>
            <div className={styles.container__management__content__text}>
              <Content 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
              />
              <Content 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
              />
            </div>

            <div className={styles.container__management__content__image}>
              <img src="/spider-back.png" alt="gestao-atual" width={"100%"}/>
            </div>

            <Button 
              title="Conheça mais detalhes da gestão atual"
              path="/gestao-atual"
            />
          </div>
        </section>

        <section className={styles.container__partners}>
          <HorizontalSubtitle 
            title="Parceiros"
            colorImage='transparent'
          />

          <div className={styles.container__partners__content}>
            <CarouselLargePartnerCard partners={partners}/>
          </div>
        </section>

        <section className={styles.container__contact}>
          <HorizontalSubtitle 
            title="Contato"
            colorImage='purple'
          />

          <div className={styles.container__contact__content}>
          <div className={styles.container__contact__tag} />
            <Form 
              title="Entre em Contato"
              inputs={formInputs}
              textButton="Enviar"
              linkButton="/contato" 
            />
          </div>
        </section>
    </>
  );
}
