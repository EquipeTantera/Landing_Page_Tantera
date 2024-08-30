import { useState } from 'react';
import styles from './styles.module.scss';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';
import Pagination from '../../components/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

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
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      </div>
    </>
  );
}
