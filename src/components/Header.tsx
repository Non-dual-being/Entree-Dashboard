type HeaderProps = {
    title?: string;
    subtitle?: string;
}

export function Header({
    title = "Entree Dashboard",
    subtitle = "Klik en navigeer"
}: HeaderProps) {
    return (
        <header className="header_dashboard">
            <div className="header_inner">
                <h1 className="header_title">{title}</h1>
                <p className="header_subtile">{subtitle}</p>
            </div>
        </header>
    )
}