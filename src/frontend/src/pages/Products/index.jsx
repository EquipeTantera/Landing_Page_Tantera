import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import styles from "./styles.module.scss";
import FilterButton from "../../components/Buttons/FilterButton";
import FilterModal from "../../components/FilterModal";
import SmallProductCard from "../../components/Card/SmallCard/SmallProductCard";
import { API_BASE_URL, BASE_URL } from "../../services/config";

export default function Products() {
  const [productsData, setProductsData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showMoreFesta, setShowMoreFesta] = useState(false);
  const [showMoreUniformes, setShowMoreUniformes] = useState(false);
  const [showMoreColecoes, setShowMoreColecoes] = useState(false);
  const [filters, setFilters] = useState({
    sort: '',
    price: 0,
    categories: [],
    sizes: [],
    colors: [],
    gender: '',
  });

  // Carregar dados dos produtos
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products?populate=*`);
        const products = response.data.data;

        const formattedProducts = products.map((product) => {
          const imageUrl = product?.attributes?.image?.data?.[0]?.attributes?.url || "";

          const colors = Array.isArray(product?.attributes?.colors_id?.data)
            ? product.attributes.colors_id.data.map((color) => color.attributes.value)
            : [];

          const sizes = Array.isArray(product?.attributes?.sizes_id?.data)
            ? product.attributes.sizes_id.data.map((size) => size.attributes.value)
            : [];

          const genres = Array.isArray(product?.attributes?.genres_id?.data)
            ? product.attributes.genres_id.data.map((genre) => genre.attributes.value)
            : [];

          const categories = Array.isArray(product?.attributes?.categories_ids?.data)
            ? product.attributes.categories_ids.data.map((category) => category.attributes.category)
            : [];

          const sold_out = product?.attributes?.sold_out || false;

          return {
            title: product?.attributes?.title || "",
            price: product?.attributes?.price || 0,
            image: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
            description: product?.attributes?.description || "",
            sold_out,
            colors,
            sizes,
            genres,
            categories,
            buttonText: "Ver Produto",
            buttonPath: `/produtos/${product.id}`,
          };
        });

        setProductsData(formattedProducts);
      } catch (error) {
        console.error("Erro ao buscar dados dos produtos:", error);
      }
    };

    fetchProductsData();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filterProductsByCategory = (categoryName) => {
    return productsData.filter((product) =>
      product.categories.includes(categoryName)
    );
  };

  const getVisibleProducts = (categoryName, showMore) => {
    const products = filterProductsByCategory(categoryName);
    return showMore ? products : products.slice(0, 3);
  };

  const renderCategorySection = (categoryName, showMoreState, setShowMoreState) => {
    const products = filterProductsByCategory(categoryName);

    if (products.length === 0) {
      return null;
    }

    return (
      <section className={styles.section}>
        <div className={styles["container-header"]}>
          <HorizontalSubtitle title={categoryName} colorImage="transparent" tag={false} />
        </div>
        <div className={styles["container-products"]}>
          {getVisibleProducts(categoryName, showMoreState).map((product, index) => (
            <SmallProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              buttonText={product.buttonText}
              buttonPath={product.buttonPath}
              isAvailable={!product.sold_out}
            />
          ))}
        </div>
        {products.length > 3 && (
          <button
            onClick={() => setShowMoreState((prev) => !prev)}
            className={styles["container-products__button"]}
          >
            {showMoreState ? (
              <p className={styles["container-products__button__paragraph"]}>
                Ocultar produtos
              </p>
            ) : (
              <p className={styles["container-products__button__paragraph"]}>
                Ver mais produtos de{" "}
                <span className={styles["container-products__button__paragraph__span"]}>
                  {categoryName.toLowerCase()}
                </span>
              </p>
            )}
          </button>
        )}
      </section>
    );
  };

  return (
    <>
      <MainTitle shadowText="Produtos" mainText="Produtos" />
      <PaperBackground>
        {renderCategorySection("Acessórios de Festa", showMoreFesta, setShowMoreFesta)}
        {renderCategorySection("Uniformes", showMoreUniformes, setShowMoreUniformes)}
        {renderCategorySection("Coleções", showMoreColecoes, setShowMoreColecoes)}
      </PaperBackground>
    </>
  );
}
