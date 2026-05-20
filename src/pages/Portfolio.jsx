import resumeData from '../data/resume.json'
import '../App.css'

function Portfolio() {
  const json = JSON.stringify(resumeData, null, 2)

  return (
    <div className="app">
      <div className="path-hint">GET /sathya/portfolio</div>
      <div className="search-hint">press ctrl + f to search</div>
      <pre>{json}</pre>
    </div>
  )
}

export default Portfolio