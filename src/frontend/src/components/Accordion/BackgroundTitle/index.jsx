import styles from './styles.module.scss';
import PropTypes from 'prop-types';


export default function BackgroundTitle({ colorImage, children }) {
    return (
        <div className={styles.container}>
            <div style={{ backgroundImage: `url(accordion-subtitle-${colorImage}.png)` }} className={styles.container__background} >
                {children}
            </div>
        </div>
    )
}

BackgroundTitle.propTypes = {
    colorImage: PropTypes.oneOf(['black', 'red']).isRequired,
    children: PropTypes.node.isRequired,
}