import '../../styles/App.css'
import background from '../../assets/images/section_1_BG.jpg'
import Card from '../../components/Card'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locations: [], isLoading: false }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch("./kasaData.json")
      .then((response) => response.ok ? response.json() : console.error('code: ', response.status))
      .then((data) => this.setState({ locations: data.locationsList, isLoading: false }))
      .catch ((error)=>console.log(error))
      }

  render() {
    const { locations, isLoading } = this.state
    if (isLoading) {
      return (
        
          <h1>loading data en cours...</h1>
        
      )
    } else {
      return (
        <div className="body">
          <section className="section-1">
            <img
              src={background}
              alt="background"
              className="section-1-BG"
            />
            <h1 className="section-1-title">
              Chez vous, partout et ailleurs
            </h1>
          </section>
          <section className="gallery">
            {locations.map(({ index, id, title, cover }) => (
              <Card
                key={`${id}-${index}`}
                id={id}
                cover={cover}
                title={title}
              />
            ))}
          </section>
        </div>
      )
    }
  }
}

export default App
