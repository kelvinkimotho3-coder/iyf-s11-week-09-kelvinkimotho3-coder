import styles from './Button.module.css';

function ButtonModule({ variant = 'primary', children, ...props }) {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
}

export default ButtonModule;