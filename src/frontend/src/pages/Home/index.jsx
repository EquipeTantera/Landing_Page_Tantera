import styles from './styles.module.scss';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';
import LargePartnerCard from '../../components/Card/LargeCard/LargePartnerCard';
import LargeProductCard from '../../components/Card/LargeCard/LargeProductCard';
import ResultInformationCard from '../../components/Card/InformationCard/ResultInformationCard';
import ManagementInformationCard from '../../components/Card/InformationCard/ManagementInformationCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>

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
        </section>
      </div>
    </>
  );
}
