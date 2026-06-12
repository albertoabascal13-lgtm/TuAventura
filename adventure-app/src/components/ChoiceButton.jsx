import styles from './ChoiceButton.module.css'

export default function ChoiceButton({ choice, onClick, index }) {
  return (
    <button
      className={styles.button}
      onClick={() => onClick(choice)}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <span className={styles.arrow}>❯</span>
      <span className={styles.text}>{choice.text}</span>
    </button>
  )
}
