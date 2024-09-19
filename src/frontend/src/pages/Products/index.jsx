import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import styles from "./styles.module.scss";
import FilterButton from "../../components/Buttons/FilterButton";
import FilterModal from "../../components/FilterModal";
import SmallProductCard from "../../components/Card/SmallCard/SmallProductCard";
import { useState } from "react";

export default function Products() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showMoreFesta, setShowMoreFesta] = useState(false);
  const [showMoreUniformes, setShowMoreUniformes] = useState(false);
  const [showMoreColecoes, setShowMoreColecoes] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return(
    <>
      <MainTitle 
        shadowText="Produtos"
        mainText="Produtos"
      />
      <PaperBackground>
        <section className={styles.section}>

          <div className={styles["container-header"]}>
            <HorizontalSubtitle 
              title="Acessórios de Festa"
              colorImage="transparent"
              tag={false}
              titleSize={"2.5rem"}
            />

            <FilterButton 
              text="Filtrar"
              onClick={handleOpenModal}
            />

            <FilterModal 
              isOpen={isModalOpen} 
              onClose={handleCloseModal} 
            />
          </div>

          <div className={styles["container-products"]}>
            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />
          </div>

          {showMoreFesta && (
            <div className={styles["container-products"]}>
              <SmallProductCard
                title="Caneca Tanterada"
                price="35.00"
                image="/photo-small-card.png"
                description="Caneca de porcelana com estampa de alta qualidade."
                buttonText="Ver Produto"
                buttonPath="/produto/1"
              />
            </div>
          )}

          <button
            onClick={() => setShowMoreFesta((prev) => !prev)}
            className={styles["container-products__button"]}
          >
            {showMoreFesta ? <p className={styles["container-products__button__paragraph"]}>Ocultar produtos</p> : <p className={styles["container-products__button__paragraph"]}>Ver mais produtos de <span className={styles["container-products__button__paragraph__span"]}>acessórios de festa</span></p>}
          </button>
        </section>

        <section className={styles.section}>
          <HorizontalSubtitle 
            title="Uniformes"
            colorImage="transparent"
            tag={false}
            titleSize={"2.5rem"}
          />

          <div className={styles["container-products"]}>
            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />
          </div>

          {showMoreUniformes && (
            <div className={styles["container-products"]}>
              <SmallProductCard
                title="Caneca Tanterada"
                price="35.00"
                image="/photo-small-card.png"
                description="Caneca de porcelana com estampa de alta qualidade."
                buttonText="Ver Produto"
                buttonPath="/produto/1"
              />
            </div>
          )}

          <button
            onClick={() => setShowMoreUniformes((prev) => !prev)}
            className={styles["container-products__button"]}
          >
            {showMoreUniformes ? <p className={styles["container-products__button__paragraph"]}>Ocultar produtos</p> : <p className={styles["container-products__button__paragraph"]}>Ver mais produtos de <span className={styles["container-products__button__paragraph__span"]}>Uniformes</span></p>}
          </button>

        </section>

        <section className={styles.section}>
          <HorizontalSubtitle 
            title="Coleções"
            colorImage="transparent"
            tag={false}
            titleSize={"2.5rem"}
          />

          <div className={styles["container-products"]}>
            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />

            <SmallProductCard 
              title="Caneca Tanterada"
              price="35.00"
              image="/photo-small-card.png"
              description="Caneca de porcelana com estampa de alta qualidade."
              buttonText="Ver Produto"
              buttonPath="/produto/1"
            />
          </div>

          {showMoreColecoes && (
            <div className={styles["container-products"]}>
              <SmallProductCard
                title="Caneca Tanterada"
                price="35.00"
                image="/photo-small-card.png"
                description="Caneca de porcelana com estampa de alta qualidade."
                buttonText="Ver Produto"
                buttonPath="/produto/1"
              />
            </div>
          )}

          <button
            onClick={() => setShowMoreColecoes((prev) => !prev)}
            className={styles["container-products__button"]}
          >
            {showMoreColecoes ? <p className={styles["container-products__button__paragraph"]}>Ocultar produtos</p> : <p className={styles["container-products__button__paragraph"]}>Ver mais produtos de <span className={styles["container-products__button__paragraph__span"]}>Coleções</span></p>}
          </button>
        </section>
      </PaperBackground>
    </>
  )
}