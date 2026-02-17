import { useMemo } from 'react'
import './App.scss'
import Header from './components/layout/Header/Header'
import Card from './components/ui/Card/Card'
import FilterBar from './components/ui/FilterBar/FilterBar'
import jobListingsData from '../data.json'
import {useJobStore} from "./store/useJobStore.ts"
import type {Job} from "./types/job.ts"

const jobs: Job[] = jobListingsData.map(job => ({
    ...job,
    newListing: job.new,
}))

function App() {
    const filters = useJobStore((state) => state.filters)

    const filteredJobs = useMemo(() => {
        if (filters.length === 0) return jobs
        
        return jobs.filter(job => {
            const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
            return filters.every(filter => jobTags.includes(filter))
        })
    }, [filters])

    return (
    <>
      <Header />
      <main className={`main-content ${filters.length ? 'main-content--with-filter' : ''}`}>
          { !!filters.length && <FilterBar />}
        <ul className="job-listings">
            {filteredJobs.map((job) => (
                <li key={job.id} className="job-listings__item">
                    <Card {...job} />
                </li>
            ))}
        </ul>
      </main>
    </>
  )
}

export default App
