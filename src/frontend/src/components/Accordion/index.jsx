import styles from './styles.module.scss';
import HorizontalSubtitle from '../HorizontalSubtitle';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

export default function Accordion({ items }) {
    return (
        <div className={styles.container}>
            <HorizontalSubtitle
                title='FAQ'
                colorImage='transparent'
                tag={true}
                titleSize="36px"
            />
            <div className={styles.container__accordions}>
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        buttonText={item.buttonText}
                        panelText={item.panelText}
                        colorImage={item.colorImage}
                    />
                ))}
            </div>
        </div>
    );
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            buttonText: PropTypes.string,
            panelText: PropTypes.string,
            colorImage: PropTypes.string,
        })
    ).isRequired,
};
