import { useState } from 'react'
import styles from './HistoryPanel.module.css'

export default function HistoryPanel({ history }) {
  const [isOpen, setIsOpen] = useState(false)

  if (history.length === 0) return null

  return (
    <aside className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        title={isOpen ? 'Cerrar historial' : 'Ver historial'}
      >
        <span className={styles.toggleIcon}>{isOpen ? '✕' : '📜'}</span>
        <span className={styles.toggleLabel}>
          {isOpen ? 'Cerrar' : `Historial (${history.length})`}
        </span>
      </button>

      <div className={styles.content} aria-hidden={!isOpen}>
        <h3 className={styles.heading}>Tus Decisiones</h3>
        <ol className={styles.list}>
          {history.map((entry, i) => (
            <li key={i} className={styles.entry}>
              <span className={styles.entryNumber}>{i + 1}</span>
              <div className={styles.entryBody}>
                <span className={styles.entryNode}>{entry.nodeTitle}</span>
                <span className={styles.entryChoice}>❯ {entry.choiceText}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}
