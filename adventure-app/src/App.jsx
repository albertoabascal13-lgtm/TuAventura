import { Routes, Route } from 'react-router-dom'
import HomeScreen from './components/HomeScreen.jsx'
import StoryEngine from './components/StoryEngine.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/story/:storyId" element={<StoryEngine />} />
      </Routes>
    </div>
  )
}
