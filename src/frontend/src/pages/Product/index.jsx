import { useParams } from 'react-router-dom';
import LargeProductCard from "../../components/Card/LargeCard/LargeProductCard";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import styles from "./styles.module.scss";

const products = [
  {
    id: 1,
    name: "Produto 1",
    description: "Descrição do produto 1",
    fullImage: "/partner-furioso-full.png",
    price: 100.0,
    colors: ["Azul", "Vermelho", "Verde"],
    sizes: ["P", "M", "G"],
    link: "https://wa.me/SeuNumeroDeTelefone",
    images : [
      "/copa-inteli.png",
      "/partner-furioso.png",
      "/photo-small-card.png",
    ]
  },
  {
    id: 2,
    name: "Produto 2",
    description: "Descrição do produto 2",
    fullImage: "/product-2-full.png",
    price: 150.0,
    colors: ["Amarelo", "Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
    link: "https://wa.me/SeuNumeroDeTelefone",
    images : [
      "/copa-inteli.png",
      "/partner-furioso.png",
      "/photo-small-card.png",
    ]
  },
];

export default function Product() {
  const { id } = useParams(); 
  const product = products.find((product) => product.id === parseInt(id)); 

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <>
      <MainTitle 
        shadowText="Produtos"
        mainText={product.name}
      />
      <PaperBackground>
        <div className={styles.container}>
          <LargeProductCard 
            name={product.name}
            description={product.description}
            fullImage={product.fullImage}
            price={product.price}
            colors={product.colors}
            textButton={"Comprar"}
            linkButton={product.link}
            sizes={product.sizes}
            images={product.images}
            isAvailable={true}
          />
        </div>
      </PaperBackground>
    </>
  );
}
