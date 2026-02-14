import './App.scss'
import Header from './components/layout/Header/Header'
import Card from './components/ui/Card/Card'
import FilterBar from './components/ui/FilterBar/FilterBar'
import jobListingsData from '../data.json'
import {useJobStore} from "./store/useJobStore.ts";

function App() {
    const filters = useJobStore((state) => state.filters)
    const filteredJobListings = jobListingsData.filter(job => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
        return filters.every(filter => jobTags.includes(filter))
    })

    const renderJobListings = () => {
        if (!filters.length) {
            return jobListingsData.map((job) => (
                <li key={job.id} className="job-listings__item">
                    <Card {...job} newListing={job.new} />
                </li>
            ))
        } else {
            return filteredJobListings.map((job) => (
                <li key={job.id} className="job-listings__item">
                    <Card {...job} newListing={job.new} />
                </li>
            ))
        }
    }

    return (
    <>
      <Header />
      <main>
        <FilterBar />
        <ul className="job-listings">
            { renderJobListings() }
        </ul>
      </main>
    </>
  )
}

export default App
