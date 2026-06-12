import { useNavigate } from 'react-router-dom'
import styles from './HomeScreen.module.css'

// Import all stories
import laMansion from '../stories/la-mansion.json'
import elFaro from '../stories/el-faro.json'

const STORIES = [laMansion, elFaro]

export default function HomeScreen() {
  const navigate = useNavigate()

  function handlePlay(story) {
    const saved = localStorage.getItem(`progress_${story.id}`)
    if (saved) {
      const { currentNode } = JSON.parse(saved)
      if (currentNode && currentNode !== story.startNode) {
        const resume = window.confirm('¿Deseas continuar donde lo dejaste?')
        if (!resume) {
          localStorage.removeItem(`progress_${story.id}`)
        }
      }
    }
    navigate(`/story/${story.id}`)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.ornament}>✦</div>
        <h1 className={styles.title}>TU AVENTURA</h1>
        <p className={styles.subtitle}>Elige tu Destino</p>
        <div className={styles.ornament}>✦</div>
      </header>

      <main className={styles.main}>
        <p className={styles.intro}>
          Cada historia es un camino. Cada camino, una trampa diferente.
          Elige con cuidado. Las decisiones no tienen marcha atrás.
        </p>

        <div className={styles.storyGrid}>
          {STORIES.map((story) => {
            const saved = localStorage.getItem(`progress_${story.id}`)
            const hasSave = !!saved

            return (
              <article key={story.id} className={styles.storyCard}>
                <div className={styles.cardGlow} />
                <div className={styles.cardInner}>
                  <h2 className={styles.storyTitle}>{story.title}</h2>
                  <p className={styles.storyDescription}>{story.description}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaBadge}>
                      ⏱ {story.estimatedLength}
                    </span>
                    {hasSave && (
                      <span className={styles.saveBadge}>Partida guardada</span>
                    )}
                  </div>
                  <button
                    className={styles.playButton}
                    onClick={() => handlePlay(story)}
                  >
                    {hasSave ? 'Continuar' : 'Comenzar'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Las puertas siempre están abiertas. La pregunta es si podrás salir.</p>
      </footer>
    </div>
  )
}
