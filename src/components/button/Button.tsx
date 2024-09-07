import styles from './Button.module.css';
type Props = {
    title: string;
    additionalStyle?: any;
}
const Button = ({ title, additionalStyle }: Props) => {

    return (
        <button className={[additionalStyle, styles.btn].join(' ')}>{title}</button>
    )
}

export default Button;
