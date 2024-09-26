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
            buttonPath: `/produto/${product.id}`,
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

  const handleApplyFilters = (appliedFilters) => {
    console.log('Filtros aplicados:', appliedFilters); 
    setFilters(appliedFilters);
    setProductsData([...productsData]);
  };

  // Função para filtrar os produtos
  const getFilteredProducts = () => {
    let filteredProducts = [...productsData]; 
    
    // Filtrar por categorias
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.some((category) => filters.categories.includes(category))
      );
    }
  
    // Filtrar por tamanhos
    if (filters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }
  
    // Filtrar por cores
    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color))
      );
    }
  
    // Filtrar por gênero
    if (filters.gender) {
      filteredProducts = filteredProducts.filter((product) =>
        product.genres.some((genre) => genre === filters.gender)
      );
    }
  
    // Ordenar por preço
    if (filters.sort === 'menor') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'maior') {
      filteredProducts.sort((a, b) => b.price - a.price); 
    }
  
    console.log('Produtos ordenados e filtrados:', filteredProducts);
    return filteredProducts;
  };
  
  
  const filteredProducts = getFilteredProducts();
  const hasFiltersApplied = filters.price != 0 || filters.categories.length > 0 || filters.sizes.length > 0 || filters.colors.length > 0 || filters.gender != '';

  // Função para filtrar produtos pela categoria
  const filterProductsByCategory = (categoryName) => {
    return productsData.filter((product) =>
      product.categories.includes(categoryName)
    );
  };

  return (
    <>
      <MainTitle shadowText="Produtos" mainText="Produtos" />
      <PaperBackground>
        {hasFiltersApplied ? (
          <section className={styles.section}>
            <div className={styles["container-header"]}>
              <HorizontalSubtitle title="Produtos Filtrados" colorImage="transparent" tag={false} />
              <FilterButton text="Filtrar" onClick={handleOpenModal} />
              <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} onApplyFilters={handleApplyFilters} />
            </div>

            <div className={styles["container-products"]}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
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
                ))
              ) : (
                <p>Nenhum produto encontrado com os filtros aplicados.</p>
              )}
            </div>
          </section>
        ) : (
          <>
            <section className={styles.section}>
              <div className={styles["container-header"]}>
                <HorizontalSubtitle title="Acessórios de Festa" colorImage="transparent" tag={false} />
                <FilterButton text="Filtrar" onClick={handleOpenModal} />
                <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} onApplyFilters={handleApplyFilters} />
              </div>

              <div className={styles["container-products"]}>
                {filterProductsByCategory("Acessórios de Festa").map((product, index) => (
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

              <button
                onClick={() => setShowMoreFesta((prev) => !prev)}
                className={styles["container-products__button"]}
              >
                {showMoreFesta ? (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ocultar produtos
                  </p>
                ) : (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ver mais produtos de{" "}
                    <span className={styles["container-products__button__paragraph__span"]}>
                      acessórios de festa
                    </span>
                  </p>
                )}
              </button>
            </section>

            {/* Seção de Uniformes */}
            <section className={styles.section}>
              <HorizontalSubtitle title="Uniformes" colorImage="transparent" tag={false} titleSize="2.5rem" />
              <div className={styles["container-products"]}>
                {filterProductsByCategory("Uniformes").map((product, index) => (
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

              <button
                onClick={() => setShowMoreUniformes((prev) => !prev)}
                className={styles["container-products__button"]}
              >
                {showMoreUniformes ? (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ocultar produtos
                  </p>
                ) : (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ver mais produtos de{" "}
                    <span className={styles["container-products__button__paragraph__span"]}>
                      uniformes
                    </span>
                  </p>
                )}
              </button>
            </section>

            {/* Seção de Coleções */}
            <section className={styles.section}>
              <HorizontalSubtitle title="Coleções" colorImage="transparent" tag={false} titleSize="2.5rem" />
              <div className={styles["container-products"]}>
                {filterProductsByCategory("Coleções").map((product, index) => (
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

              <button
                onClick={() => setShowMoreColecoes((prev) => !prev)}
                className={styles["container-products__button"]}
              >
                {showMoreColecoes ? (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ocultar produtos
                  </p>
                ) : (
                  <p className={styles["container-products__button__paragraph"]}>
                    Ver mais produtos de{" "}
                    <span className={styles["container-products__button__paragraph__span"]}>
                      coleções
                    </span>
                  </p>
                )}
              </button>
            </section>
          </>
        )}
      </PaperBackground>
    </>
  );
}
