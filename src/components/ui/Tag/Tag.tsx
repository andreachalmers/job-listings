import './Tag.scss'
import {useJobStore} from "../../../store/useJobStore.ts";
// import {useState} from "react";

interface TagProps {
    label: string
    selected?: boolean
}

export default function Tag({ label, selected }: TagProps) {
    // const [selected, setSelected] = useState(false)
    const addFilter = useJobStore((state) => state.addFilter)
    const removeFilter = useJobStore((state) => state.removeFilter)
    const handleTagSelect = (label: string) => {
        if(selected) {
            removeFilter(label)
            //setSelected(false)
        } else {
            addFilter(label)
            //setSelected(true)
        }
    }
    return (
        <li>
            <button
                className={`tag ${selected ? 'tag--selected' : ''}`}
                onClick={() => handleTagSelect(label)}
            >
                {label}
            </button>
        </li>
    )
}

