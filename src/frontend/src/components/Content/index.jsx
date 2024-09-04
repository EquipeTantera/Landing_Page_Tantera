
import styles from './styles.module.scss';
import PropType from 'prop-types';


export default function Content({ title, content, titleSize, contetSize }) {
  return (
    <section className={styles.container}>
      {title && <h3 className={styles.container__title} style={{ fontSize: titleSize }}>{title}</h3>}
      <p className={styles.container__text} style={{ fontSize: contetSize }}>{content}</p>
    </section>
  )
}

Content.propTypes = {
  title: PropType.string,
  content: PropType.string,
  titleSize: PropType.string,
  contetSize: PropType.string
}