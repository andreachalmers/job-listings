import './Badge.scss'

interface BadgeProps {
    variant: 'new' | 'featured'
}

export default function Badge({ variant }: BadgeProps) {
    return (
        <span className={`badge badge--${variant}`}>
            {variant === 'new' ? 'NEW!' : 'FEATURED'}
        </span>
    )
}

