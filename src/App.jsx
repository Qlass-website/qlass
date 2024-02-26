import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page'
import Layout from './Layout'
import AboutPage from './pages/about-page'
import CoursesPage from './pages/courses-page'
import ContactPage from './pages/contact-page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
