import styles from './styles.module.scss';
import PaperBackground from '../../components/PaperBackground';
import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import CountingCard from '../../components/Card/CountingCard';
import Content from '../../components/Content';
import Button from '../../components/Buttons/Button';
import CarouselLargePartnerCard from '../../components/Carousels/CarouselLargePartnerCard';
import Form from '../../components/Card/FormCard';
import { API_BASE_URL } from "../../services/config";
import axios from "axios";
import { useEffect, useState } from 'react';
import CarouselSmallEventCard from '../../components/Carousels/CarouselSmallEventCard'; 

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
  const [eventsData, setEventsData] = useState([]);
  const currentDate = new Date();
  const [partners, setPartners] = useState([]);
  const [managementPhotoUrl, setManagementPhotoUrl] = useState('');

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

  // Função para buscar os dados de eventos do backend
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events?populate=*`);
        const events = response.data.data;

        const formattedEvents = events.map((event) => {
          const imageUrl = event?.attributes?.image?.data?.[0]?.attributes?.url || "";

          return {
            title: event?.attributes?.title || "",
            description: event?.attributes?.description || "",
            image: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
            address: `${event?.attributes?.street || ""}, ${event?.attributes?.number || ""}, ${event?.attributes?.postal_code || ""}`,
            date: new Date(event?.attributes?.date).toLocaleDateString("pt-BR"),
            startTime: event?.attributes?.start_time ? new Date(event.attributes.start_time) : null,
            endTime: event?.attributes?.end_time ? new Date(event.attributes.end_time) : null,
            ticket: String(event?.attributes?.price || ""),
            buttonText: "Saiba mais",
            buttonPath: `/eventos/${event.id}`,
            eventType: event?.attributes?.event_type?.data?.attributes?.type || "Outros", 
          };
        });

        setEventsData(formattedEvents);
        console.log("Dados dos eventos:", formattedEvents);
      } catch (error) {
        console.error("Erro ao buscar dados dos eventos:", error);
      }
    };

    fetchEventsData();
  }, []);

  // Função para buscar os dados de parceiros do backend
  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/partners?populate=*`);
        const partners = response.data.data;

        const formattedPartners = partners.map((partner) => {
          const imageUrl = partner?.attributes?.image?.data?.[0]?.attributes?.url || "";
          const iconUrl = partner?.attributes?.icon?.data?.attributes?.url || "";

          return {
            title: partner?.attributes?.title || "Título não disponível",
            description: partner?.attributes?.slogan || "Descrição não disponível",
            image: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
            fullImage: iconUrl.startsWith("http") ? iconUrl : `${BASE_URL}${iconUrl}`,
            events: partner?.attributes?.event_id?.data?.map((event) => ({
              title: event?.attributes?.title || "Evento não especificado",
              date: new Date(event?.attributes?.date).toLocaleDateString("pt-BR"),
            })) || [],
            impacts: partner?.attributes?.result_id?.data?.map((impact) => ({
              name: impact?.attributes?.name || "Impacto não especificado",
            })) || [],
            textButton: "Saiba mais",
            linkButton: `/parceiros`,
          };
        });

        setPartners(formattedPartners);
        console.log("Dados dos parceiros formatados:", formattedPartners);
      } catch (error) {
        console.error("Erro ao buscar dados dos parceiros:", error);
      }
    };

    fetchPartnersData();
  }, []);

  // Fetch para buscar os dados da gestão atual e obter a URL da foto
  useEffect(() => {
    const fetchManagementPhoto = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/photos?populate=*`);
        const managementData = response.data.data;

        if (managementData.length > 0) {
          const photoData = managementData[0]?.attributes?.photo?.data?.[0]?.attributes;
          const photoUrl = photoData?.formats?.medium?.url || photoData?.url || "";
          setManagementPhotoUrl(photoUrl); 
        }
      } catch (error) {
        console.error("Erro ao buscar foto da gestão:", error);
      }
    };

    fetchManagementPhoto();
  }, []);
  

  // Filtrar eventos futuros (próximos)
  const filterUpcomingEvents = (events) => {
    return events.filter((event) => event.startTime && event.startTime > currentDate);
  };

  // armazenar os eventos futuros
  const upcomingEvents = filterUpcomingEvents(eventsData);
  
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
            <CarouselSmallEventCard
              events={upcomingEvents}
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
              <img src={managementPhotoUrl} alt="gestao-atual" width={"100%"}/>
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
