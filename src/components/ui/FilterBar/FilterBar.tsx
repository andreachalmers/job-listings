import './FilterBar.scss'
import {useJobStore} from "../../../store/useJobStore.ts";

export default function FilterBar() {
    const filters = useJobStore((state) => state.filters)
    return (
        <div className="filter-bar">
            <div>
                { filters.map((filter => (
                        <div className="filter-bar__filter" key={filter}>
                            <span>{filter}</span>
                            <button className="filter-bar__remove-btn" onClick={() => useJobStore.getState().removeFilter(filter)}>x</button>
                        </div>
                    ))
                )}
            </div>
            <button className="filter-bar__clear-btn" onClick={() => useJobStore.getState().clearFilters()}>Clear</button>
        </div>
    )
}