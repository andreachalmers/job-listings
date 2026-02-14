import './App.scss'
import Header from './components/layout/Header/Header'
import Card from './components/ui/Card/Card'
import jobListingsData from '../data.json'


function App() {
  return (
    <>
      <Header />
      <main>
        <ul className="job-listings">
          {
            jobListingsData.map((job) => <li className="job-listings__item" key={job.id}><Card {...job} newListing={job.new} /></li>)
          }
        </ul>
      </main>
    </>
  )
}

export default App
