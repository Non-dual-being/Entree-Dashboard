import type { DashboardLink } from "../data/links";

type TileProps = {
    item: DashboardLink
};

export function Tile({ item }: TileProps){
    const icon = item.icon ?? "🔗";

    return (
        <a 
            href={item.url}
            className="title"
            target="_blank"
            rel="noopener noreferrer"    
            
        > 
            <div className="title_ion" aria-hidden="true">
                {icon}
            </div>
            <div className="title_title">{item.title}</div>
        </a>
    )
}