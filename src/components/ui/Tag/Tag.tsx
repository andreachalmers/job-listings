import './Tag.scss'
import {useJobStore} from "../../../store/useJobStore.ts";

interface TagProps {
    label: string
    selected?: boolean
}

export default function Tag({ label, selected }: TagProps) {
    const addFilter = useJobStore((state) => state.addFilter)
    const removeFilter = useJobStore((state) => state.removeFilter)
    const handleTagSelect = (label: string) => {
        if(selected) {
            removeFilter(label)
        } else {
            addFilter(label)
        }
    }
    return (
        <li>
            <button
                className={`tag ${selected ? 'tag--selected' : ''}`}
                onClick={() => handleTagSelect(label)}
                data-cy="tag"
            >
                {label}
            </button>
        </li>
    )
}

