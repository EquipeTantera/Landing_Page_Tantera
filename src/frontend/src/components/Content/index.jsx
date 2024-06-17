
import styles from './styles.module.scss';
import PropType from 'prop-types';


export default function Content({ title, content }) {
  return (
    <section className={styles.container}>
      {title && <h3 className={styles.container__title}>{title}</h3>}
      <p className={styles.container__text}>{content}</p>
    </section>
  )
}

Content.propTypes = {
  title: PropType.string,
  content: PropType.string
}