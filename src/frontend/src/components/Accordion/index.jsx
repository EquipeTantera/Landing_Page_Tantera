import styles from './styles.module.scss';
import HorizontalSubtitle from '../HorizontalSubtitle';
import AccordionItem from './AccordionItem';

export default function Accordion() {
    return (
        <div className={styles.container}>
            <HorizontalSubtitle
                title='FAQ'
                colorImage='transparent'
                tag={true}
                titleSize="36px"
            />
            <div className={styles.container__accordions}>
                <AccordionItem
                    buttonText="por que eu deveria assinar o plano de sócios?"
                    panelText="Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil. Ela desempenha um papel fundamental na promoção do esporte, na integração dos alunos e no fortalecimento do espírito universitário."
                    colorImage="black"
                />
                <AccordionItem
                    buttonText="O plano de sócio atleta tem alguma carência ou contrato mínimo?"
                    panelText="Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil. Ela desempenha um papel fundamental na promoção do esporte, na integração dos alunos e no fortalecimento do espírito universitário."
                    colorImage="red"
                />
                <AccordionItem
                    buttonText="Os treinos de futebol são para todos os níveis?"
                    panelText="Porque sim, pateta! A Atlética Tantera é muito mais do que uma simples associação estudantil. Ela desempenha um papel fundamental na promoção do esporte, na integração dos alunos e no fortalecimento do espírito universitário."
                    colorImage="black"
                />
            </div>
        </div>
    );
}
