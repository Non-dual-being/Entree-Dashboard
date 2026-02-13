import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tile } from './components/Tile';
import { groups } from './data/links';


import './styles/App.css'
import './styles/tokens.css'

function App() {
  return (
    <div className="page">
      <Header title='GeoFort Entree' subtitle='WeTicket en Office snelkoppelingen' />
      <main className="content">
        {
          groups.map((group) => (
            <section className="group" key={group.id}>
              <h2 className="group_title">{group.title}</h2>
              {
                group.links.length > 0 && 
                  (
                    <div className="grid">
                      {
                       group.links.map((item) => (
                        <Tile key={item.url} item={item} />
                       ))
                      }
                    </div>
                  )
              }
            </section>
          ))
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
