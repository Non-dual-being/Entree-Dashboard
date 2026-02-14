import type { DashboardLink } from "../data/links";

type TileProps = {
    item: DashboardLink
};

/**
 * TitlePRops indicates its a object with item as key and dashboardlink as value
 */

export function Tile({ item }: TileProps){
    const emoji= item.icon ?? "🔗";
    const Icon = item.IconCmp;

    return (
        <a 
            href={item.url}
            className="tile"
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}    
            
        > 
           <div className="tile_header">{item.title}</div>
            <div className="tile_body">
                <div className="tile_icon" aria-hidden="true">
                    {Icon 
                        ? <Icon size={36} /> 
                        : <span className="tile_emoji">{emoji}</span>
                    
                    }
                </div>
            </div>
        </a>
    )
}


/**
 * 
 * React works with props
 * 
 * so { item }: TileProps is short handed for Props.item 
 * 
 * Although deconstructiom is used here, the object from where the decontstruction happens is from Type TileProps
 * 
 * 
 * 
 * 
 */