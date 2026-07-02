import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ChoiceButton from './ChoiceButton.jsx'
import HistoryPanel from './HistoryPanel.jsx'
import EndScreen from './EndScreen.jsx'
import styles from './StoryEngine.module.css'

// Story registry — add new stories here
import laMansion from '../stories/la-mansion.json'
import elFaro from '../stories/el-faro.json'
import castrotorafe from '../stories/castrotorafe.json'
import elAnciano from '../stories/el-anciano.json'
import happyville from '../stories/happyville.json'
import museoTerror from '../stories/museo-terror.json'
import casaIslote from '../stories/casa-islote.json'
import laFiesta from '../stories/la-fiesta.json'
import elDorado from '../stories/el-dorado.json'

const STORY_REGISTRY = {
  'la-mansion': laMansion,
  'el-faro': elFaro,
  'castrotorafe': castrotorafe,
  'el-anciano': elAnciano,
  'happyville': happyville,
  'museo-terror': museoTerror,
  'casa-islote': casaIslote,
  'la-fiesta': laFiesta,
  'el-dorado': elDorado,
}

function loadProgress(storyId) {
  try {
    const saved = localStorage.getItem(`progress_${storyId}`)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore
  }
  return null
}

function saveProgress(storyId, currentNode, history) {
  try {
    localStorage.setItem(
      `progress_${storyId}`,
      JSON.stringify({ currentNode, history })
    )
  } catch {
    // ignore
  }
}

export default function StoryEngine() {
  const { storyId } = useParams()
  const navigate = useNavigate()
  const story = STORY_REGISTRY[storyId]

  const [currentNodeId, setCurrentNodeId] = useState(null)
  const [history, setHistory] = useState([])
  const [fadeKey, setFadeKey] = useState(0)
  const contentRef = useRef(null)

  // Initialize from saved progress or start fresh
  useEffect(() => {
    if (!story) return
    const saved = loadProgress(storyId)
    if (saved && saved.currentNode && story.nodes[saved.currentNode]) {
      setCurrentNodeId(saved.currentNode)
      setHistory(saved.history || [])
    } else {
      setCurrentNodeId(story.startNode)
      setHistory([])
    }
  }, [storyId, story])

  // Persist on every change
  useEffect(() => {
    if (currentNodeId && story) {
      saveProgress(storyId, currentNodeId, history)
    }
  }, [currentNodeId, history, storyId, story])

  const handleChoice = useCallback(
    (choice) => {
      const currentNode = story.nodes[currentNodeId]
      setHistory((prev) => [
        ...prev,
        { nodeTitle: currentNode.title, choiceText: choice.text },
      ])
      setFadeKey((k) => k + 1)
      setCurrentNodeId(choice.next)
      // Scroll to top of content
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [currentNodeId, story]
  )

  function handleRestart() {
    setCurrentNodeId(story.startNode)
    setHistory([])
    setFadeKey((k) => k + 1)
    localStorage.removeItem(`progress_${storyId}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (!story) {
    return (
      <div className={styles.error}>
        <p>Historia no encontrada.</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    )
  }

  if (!currentNodeId) return null

  const node = story.nodes[currentNodeId]

  if (!node) {
    return (
      <div className={styles.error}>
        <p>Nodo no encontrado: {currentNodeId}</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    )
  }

  if (node.isEnding) {
    return (
      <EndScreen
        node={node}
        storyId={storyId}
        onRestart={handleRestart}
        history={history}
      />
    )
  }

  const paragraphs = node.text.split('\n\n')

  return (
    <div className={styles.layout}>
      {/* Top nav bar */}
      <nav className={styles.navbar}>
        <button className={styles.homeBtn} onClick={() => navigate('/')}>
          ← Inicio
        </button>
        <span className={styles.storyName}>{story.title}</span>
        <button className={styles.restartBtn} onClick={handleRestart}>
          ↺ Reiniciar
        </button>
      </nav>

      {/* Main content */}
      <main className={styles.main} ref={contentRef}>
        <article key={fadeKey} className={styles.nodeArticle}>
          <header className={styles.nodeHeader}>
            <div className={styles.ornamentLine} />
            <h2 className={styles.nodeTitle}>{node.title}</h2>
            <div className={styles.ornamentLine} />
          </header>

          <div className={styles.nodeText}>
            {paragraphs.map((para, i) => {
              // Handle italic text wrapped in *...*
              const parts = para.split(/(\*[^*]+\*)/)
              return (
                <p key={i} className={styles.paragraph}>
                  {parts.map((part, j) =>
                    part.startsWith('*') && part.endsWith('*') ? (
                      <em key={j}>{part.slice(1, -1)}</em>
                    ) : (
                      part
                    )
                  )}
                </p>
              )
            })}
          </div>

          {node.choices && node.choices.length > 0 && (
            <div className={styles.choices}>
              <div className={styles.choicesDivider}>
                <span>¿Qué harás?</span>
              </div>
              <div className={styles.choicesList}>
                {node.choices.map((choice, i) => (
                  <ChoiceButton
                    key={i}
                    choice={choice}
                    index={i}
                    onClick={handleChoice}
                  />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* History sidebar */}
      <HistoryPanel history={history} />
    </div>
  )
}
