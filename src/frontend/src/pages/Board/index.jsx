import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import CarouselProfileCard from "../../components/Carousels/CarouselProfileCard";
import CarouselCard from "../../components/Carousels/CarouselCard";
import ResultInformationCard from "../../components/Card/InformationCard/ResultInformationCard";
import PlanningCards from "../../components/Card/PlanningCard";
import Content from "../../components/Content";

const mockDirectorias = {
    esportes: {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: "A diretoria de Esportes promove e organiza atividades esportivas que estimulam a prática de esportes, a competição saudável e o espírito de equipe."
    },
    "e-sports": {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: "A diretoria de Esportes promove e organiza atividades esportivas que estimulam a prática de esportes, a competição saudável e o espírito de equipe."
    },
    eventos: {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: "A diretoria de Esportes promove e organiza atividades esportivas que estimulam a prática de esportes, a competição saudável e o espírito de equipe."
    },
    digital: {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: "A diretoria de Esportes promove e organiza atividades esportivas que estimulam a prática de esportes, a competição saudável e o espírito de equipe."
    },
    financeiro: {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: "A diretoria de Esportes promove e organiza atividades esportivas que estimulam a prática de esportes, a competição saudável e o espírito de equipe."
    },
    tantech: {
        directors: [
            { name: 'Chefe querida', photo: 'profile-tantech.jpeg' },
            { name: 'Raissão', photo: 'photo-small-card.png' }
        ],
        cards: [
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Inteli' },
            { image: 'copa-inteli.png', event: 'Copa Fodas' }
        ],
        results: [
            { name: '3 Campeonatos' },
            { name: '+10 Premiações' },
            { name: '+150 Atletas' }
        ],
        activities: [
            { name: 'Atividade A', completed: false },
            { name: 'Atividade B', completed: true },
            { name: 'Atividade C', completed: false },
            { name: 'Atividade D', completed: true },
            { name: 'Atividade E', completed: false },
            { name: 'Atividade F', completed: true },
            { name: 'Atividade G', completed: true },
            { name: 'Atividade H', completed: true },
            { name: 'Atividade I', completed: false },
            { name: 'Atividade J', completed: true }
        ],
        boardImage: 'esportes.png',
        title: 'PLANEJAMENTO',
        content: 'blablueble bla bla bleu blau tim ta ca bum pipipi popopo tititi tatata',
    }
};

export default function Board() {
    const { diretoria } = useParams();
    const data = mockDirectorias[diretoria] || {};

    if (!data.directors) {
        return <div>Diretoria não encontrada!</div>;
    }

    return (
        <div className={styles.container}>
            <MainTitle
                shadowText={diretoria.charAt(0).toUpperCase() + diretoria.slice(1)}
                mainText={diretoria.charAt(0).toUpperCase() + diretoria.slice(1)}
            />
            <PaperBackground>
                <section className={styles.container}>
                    <div className={styles.container__about}>
                        <div className={styles.container__text}>
                            <Content
                                title={"SOBRE"}
                                content={data.content}
                                alignTitle={"center"}
                            />
                        </div>
                        <div className={styles.container__carousel}>
                            <CarouselProfileCard directors={data.directors} />
                        </div>
                    </div>
                    <div className={styles.container__events}>
                        <h2>PROJETOS</h2>
                        <CarouselCard cards={data.cards} />
                    </div>
                    <div className={styles.container__results}>
                        <ResultInformationCard results={data.results} title="RESULTADOS" />
                    </div>
                    <div className={styles.container__planningCard}>
                        <PlanningCards
                            activities={data.activities}
                            boardImage={data.boardImage}
                            title={data.title}
                        />
                    </div>
                </section>
            </PaperBackground>
        </div>
    );
}
