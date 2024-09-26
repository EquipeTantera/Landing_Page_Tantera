import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import FullBoardCard from "../../components/Card/BoardCard/FullBoardCard";
import styles from "./styles.module.scss";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";

export default function AboutUs() {
  return (
    <>
      <MainTitle 
        shadowText="Sobre nós"
        mainText="Sobre nós"
      />
      <div className={styles.aboutUsContainer}>
        <VerticalSubtitle 
          title="Fundação"
          imageBackground="purple"
          className={styles.verticalSubtitle}
        />
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Content 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
          className={styles.content}
        />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img 
          src="/background_purple_events.png" 
          alt="Background About Us"
          className={styles.aboutUsImage}
        />
      </div>
      
      <div className={styles.directorSection}>
        <VerticalSubtitle 
          title="Diretoria"
          imageBackground="red"
          subtitle="presidência"
        />
        
        <div className={styles.fullBoardCardContainer}>
          {[...Array(6)].map((_, index) => (
            <FullBoardCard 
              key={index} 
              nameBoard={`Nome ${index + 1}`} 
              description="Integer ultrices elementum mauris nec tincidunt. Mauris et lectus vel nulla condimentum dapibus. Praesent " 
              className={styles.fullBoardCard}
            />
          ))}
        </div>
      </div>
      <HorizontalSubtitle 
            title="Mascote"
            colorImage="purple"
          />
    </>
  );
}
