import styles from "./styles.module.scss";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import CarouselProfileCard from "../../components/Carousels/CarouselProfileCard";
import CarouselCard from "../../components/Carousels/CarouselCard";
import ResultInformationCard from "../../components/Card/InformationCard/ResultInformationCard";
import PlanningCards from "../../components/Card/PlanningCard";
import Content from "../../components/Content";

const directors = [
    {
        name: 'Chefe querida',
        photo: 'profile-tantech.jpeg'
    },
    {
        name: 'Raissão',
        photo: 'photo-small-card.png'
    }
];

const cards = [
    {
        image: 'copa-inteli.png',
        event: 'Copa Inteli'
    },
    {
        image: 'copa-inteli.png',
        event: 'Copa Inteli'
    },
    {
        image: 'copa-inteli.png',
        event: 'Copa Inteli'
    },
    {
        image: 'copa-inteli.png',
        event: 'Copa Fodas'
    }
];

const results = [
    { name: '3 Campeonatos' },
    { name: '+10 Premiações' },
    { name: '+150 Atletas' },
];

const activities = [
    { name: 'Atividade A', completed: false },
    { name: 'Atividade B', completed: true },
    { name: 'Atividade C', completed: false },
    { name: 'Atividade D', completed: true },
    { name: 'Atividade E', completed: false },
    { name: 'Atividade F', completed: true },
    { name: 'Atividade G', completed: true },
    { name: 'Atividade H', completed: true },
    { name: 'Atividade I', completed: false },
    { name: 'Atividade J', completed: true },
];

const boardImage = 'esportes.png';
const title = 'PLANEJAMENTO';

export default function Sports() {
    return (
        <div className={styles.container}>
            <MainTitle
                shadowText="Esportes"
                mainText="Esportes"
            />
            <PaperBackground>
                <section className={styles.container}>
                    <div className={styles.container__about}>
                        <div className={styles.container__text}>
                            <Content 
                                title={"SOBRE"}
                                content={"Integer ultrices elementum mauris nec tincidunt. Mauris et lectus vel nulla condimentum dapibus. Praesent consequat felis lectus. Mauris pharetra neque at eros dictum, vitae faucibus leo molestie. Sed accumsan cursus volutpat. Cras volutpat odio at lacus bibendum, eget cursus"}
                                alignTitle={"center"}
                            />
                        </div>
                        <div className={styles.container__carousel}>
                            <CarouselProfileCard
                                directors={directors}
                            />
                        </div>
                    </div>
                    <div className={styles.container__events}>
                        <h2>PROJETOS</h2>
                        <CarouselCard cards={cards} />
                    </div>
                    <div className={styles.container__results}>
                        <ResultInformationCard results={results} title="RESULTADOS" />
                    </div>
                    <div className={styles.container__planningCard}>
                        <PlanningCards
                            activities={activities}
                            boardImage={boardImage}
                            title={title}
                        />
                    </div>
                </section>
            </PaperBackground>
        </div>
    );
}