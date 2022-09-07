import styles from './Grid.module.css';

const Grid = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                1
            </div>
            <div className={styles.column}>
                2
            </div>
            <div className={styles.column}>
                3
            </div>
            <div className={styles.column}>
                4
            </div>
            <div className={styles.column}>
                5
            </div>
            <div className={styles.column}>
                6
            </div>
            <div className={styles.column}>
                7
            </div>
            <div className={styles.column}>
                8
            </div>
        </div>
    );
}

export default Grid;
