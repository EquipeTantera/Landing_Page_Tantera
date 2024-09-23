import PropTypes from 'prop-types';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import BackGroundTitle from '../BackgroundTitle';
import styles from './styles.module.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function AccordionItem({ buttonText, panelText, colorImage }) {
    return (
        <div className={styles.container__divs}>
            <Disclosure>
                {({ open }) => (
                    <>
                        <BackGroundTitle colorImage={colorImage}>
                            <DisclosureButton className={styles.container__button}>
                                {buttonText}
                                {open ? (
                                    <FaChevronUp className={styles.container__arrow} />
                                ) : (
                                    <FaChevronDown className={styles.container__arrow} />
                                )}
                            </DisclosureButton>
                        </BackGroundTitle>
                        <DisclosurePanel className={styles.container__content}>
                            {panelText}
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

AccordionItem.propTypes = {
    buttonText: PropTypes.string.isRequired,
    panelText: PropTypes.string.isRequired,
    colorImage: PropTypes.oneOf(['black', 'red']).isRequired,
};
