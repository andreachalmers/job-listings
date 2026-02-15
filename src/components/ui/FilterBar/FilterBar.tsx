import './FilterBar.scss'
import IconRemove from '../../../assets/images/icon-remove.svg'
import {useJobStore} from "../../../store/useJobStore.ts";

export default function FilterBar() {
    const filters = useJobStore((state) => state.filters)
    return (
        <div className="filter-bar">
            <div className="filter-bar__filters">
                { filters.map((filter => (
                        <div className="filter" key={filter}>
                            <span className="filter__label">{filter}</span>
                            <button className="filter__remove-btn" onClick={() => useJobStore.getState().removeFilter(filter)}>
                                <img src={IconRemove} alt={`Remove ${filter} filter`} />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <button className="filter-bar__clear-btn" onClick={() => useJobStore.getState().clearFilters()}>Clear</button>
        </div>
    )
}