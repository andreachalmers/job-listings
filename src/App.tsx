import './App.scss'
import Header from './components/layout/Header/Header'
import Card from './components/ui/Card/Card'
import jobListingsData from '../data.json'


function App() {
  return (
    <>
      <Header />
      <main>
        {
          jobListingsData.map((job) => <Card {...job} newListing={job.new} />)
        }
      </main>
    </>
  )
}

export default App
