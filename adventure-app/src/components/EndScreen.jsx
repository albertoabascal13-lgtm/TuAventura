import { useNavigate } from 'react-router-dom'
import styles from './EndScreen.module.css'

const ENDING_ICONS = {
  bueno: '✦',
  malo: '✗',
  secreto: '⬡',
}

const ENDING_LABELS = {
  bueno: 'Final Verdadero',
  malo: 'Final Oscuro',
  secreto: 'Final Secreto',
}

export default function EndScreen({ node, storyId, onRestart, history }) {
  const navigate = useNavigate()
  const endingType = node.endingType || 'malo'
  const icon = ENDING_ICONS[endingType] || '◆'
  const label = ENDING_LABELS[endingType] || 'Final'

  function handleRestart() {
    localStorage.removeItem(`progress_${storyId}`)
    onRestart()
  }

  return (
    <div className={`${styles.container} ${styles[endingType]}`}>
      <div className={styles.inner}>
        <div className={styles.icon}>{icon}</div>

        <div className={styles.badge}>{label}</div>

        <h2 className={styles.endingTitle}>{node.endingTitle || 'Fin'}</h2>

        <div className={styles.textBlock}>
          {node.text.split('\n\n').map((para, i) => (
            <p key={i} className={styles.paragraph}>
              {para}
            </p>
          ))}
        </div>

        {history.length > 0 && (
          <div className={styles.stats}>
            <span>Decisiones tomadas: <strong>{history.length}</strong></span>
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.restartButton} onClick={handleRestart}>
            Volver a empezar
          </button>
          <button className={styles.homeButton} onClick={() => navigate('/')}>
            Inicio
          </button>
        </div>
      </div>
    </div>
  )
}
