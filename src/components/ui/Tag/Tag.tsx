import './Tag.scss'

interface TagProps {
    label: string
    onClick?: (label: string) => void
}

export default function Tag({ label, onClick }: TagProps) {
    return (
        <li>
            <button 
                className="tag" 
                onClick={() => onClick?.(label)}
            >
                {label}
            </button>
        </li>
    )
}

