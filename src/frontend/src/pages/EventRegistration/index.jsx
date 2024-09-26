import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss";
import LargeEventCard from "../../components/Card/LargeCard/LargeEventCard";
import PaperBackground from "../../components/PaperBackground";
import Form from "../../components/Card/FormCard";

export default function EventRegistration() {

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
      
  return (
    <>
      <MainTitle shadowText="Inscrição" mainText="Inscrição" />
      <PaperBackground>
      <LargeEventCard 
            name="Copa Inteli"
            description="A Atlética e a Central Estudantil do INTELI se uniram para a nossa 1° edição da Copa Inteli, onde os ateliês vão competir e fazer história!!"
            fullImage="/partner-furioso-full.png"
            address='Meninos da Vila - Unidade Butantã - Av. São Remo, 577 - Vila Butantã, São Paulo.'
            dates={[
              { date: '01/01/2022', startHour: '18:00', endHour: '22:00' },
              { date: '02/01/2022', startHour: '19:00', endHour: '23:00' },
            ]}
            textButton="Saiba mais"
            linkButton="/comprar"
          />
        <div className={styles.content}>
          <div className={styles.tag} />
            <Form 
              title="Entre em Contato"
              inputs={formInputs}
              textButton="Enviar"
              linkButton="/contato" 
            />
          </div>
          </PaperBackground>
    </>
  );
}
