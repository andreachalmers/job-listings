import './Card.scss'
import Badge from '../Badge/Badge'
import Tag from '../Tag/Tag'
import {useJobStore} from "../../../store/useJobStore.ts";

interface CardProps {
    id: number;
    company: string;
    logo: string;
    newListing: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

export default function Card({ company, logo, newListing, featured, position, role, level, postedAt, contract, location, languages, tools }: CardProps) {
    const tags = [role, level, ...languages, ...tools]
    const filters = useJobStore((state) => state.filters)

    return (
        <article className={`card${featured ? ' card--featured' : ''}`}>
            <img 
                src={logo} 
                alt={`${company} logo`} 
                className="card__logo" 
            />

            <div className="card__info">
                <div className="card__company-row">
                    <span className="card__company">{company}</span>
                    {newListing && <Badge variant="new" />}
                    {featured && <Badge variant="featured" />}
                </div>

                <h2 className="card__position">{position}</h2>

                <ul className="card__meta">
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                </ul>
            </div>

            <hr className="card__divider" />

            <ul className="card__tags">
                {tags.map((tag) => (
                    <Tag key={tag} label={tag} selected={!!filters.includes(tag)} />
                ))}
            </ul>
        </article>
    )
}