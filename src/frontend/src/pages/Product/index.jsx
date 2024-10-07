import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LargeProductCard from "../../components/Card/LargeCard/LargeProductCard";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import { API_BASE_URL, BASE_URL } from "../../services/config";
import styles from "./styles.module.scss";
export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/products/${id}?populate=*`);
        setProductData(formatProductData(data.data));
      } catch (err) {
        console.error("Erro ao buscar dados do produto:", err);
        setError("Erro ao carregar o produto. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);
  const formatProductData = (product) => {
    const { attributes } = product || {};
    const imageUrl = attributes?.image?.data?.[0]?.attributes?.url || "";
    const colors = attributes?.colors_id?.data.map(color => color.attributes.value) || [];
    const sizes = attributes?.sizes_id?.data.map(size => size.attributes.value) || [];
    return {
      title: attributes?.title || "Produto sem título",
      description: attributes?.description || "Sem descrição disponível.",
      price: attributes?.price || 0,
      colors,
      sizes,
      soldOut: attributes?.sold_out || false,
      fullImage: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
      images: attributes?.gallery?.data?.map(img => ({
        url: img?.attributes?.url ? `${BASE_URL}${img.attributes.url}` : "",
      })) || [],
      link: attributes?.buy_url || "#",
    };
  };
  const renderContent = useMemo(() => {
    if (loading) return <p>Carregando produto...</p>;
    if (error) return <p>{error}</p>;
    if (!productData) return <p>Produto não encontrado.</p>;
    return (
      <>
        <MainTitle shadowText="Produtos" mainText={productData.title} />
        <PaperBackground>
          <div className={styles.container}>
            <LargeProductCard
              title={productData.title}
              description={productData.description}
              fullImage={productData.fullImage}
              price={productData.price}
              colors={productData.colors}
              sizes={productData.sizes}
              images={productData.images}
              textButton="Comprar"
              linkButton={productData.link}
              isAvailable={!productData.soldOut}
            />
          </div>
        </PaperBackground>
      </>
    );
  }, [loading, error, productData]);
  return renderContent;
}