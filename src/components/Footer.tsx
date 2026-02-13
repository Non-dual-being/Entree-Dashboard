import logo from "./../assets/geofort_logo.png";

export function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer className="footer_dashboard">
            <p id="copy_logo">
                &copy; <span>{year}</span> GeoFort
            </p>
    

            <div className="footer-logo-container">
                <img src={logo} alt="GeoFort Logo" className="footer-logo"/>
            </div>
        </footer>
    )
}