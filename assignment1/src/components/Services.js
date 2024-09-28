
import webDevImage from '../assets/web.png'; 
import mobileAppsImage from '../assets/apps.jpeg';
import programmingImage from '../assets/genpro.jpeg';
import portraitImage from '../assets/potrait.jpeg';
import paintingImage from '../assets/paintings.jpeg';
import posterImage from '../assets/posters.jpeg';
import uiImage from '../assets/ui.jpeg';
import craftImage from '../assets/crafts.jpeg';


const services = [
  { name: "Web Development", image: webDevImage },
  { name: "Mobile Apps", image: mobileAppsImage },
  { name: "General Programming", image: programmingImage },
  { name: "UI/UX", image: uiImage },
];

const otherServices = [
  { name: "Portraits", image: portraitImage },
  { name: "Paintings", image: paintingImage },
  { name: "Posters", image: posterImage },
  { name: "Crafts", image: craftImage},
];

const Services = () => {
  return (
    <div>
      <h1>My Services</h1>
      
      <h2>Software Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img className="service-image" src={service.image} alt={service.name} />
            <h4 className="service-name">{service.name}</h4>
          </div>
        ))}
      </div>

      <h2>Other Services</h2>
      <div className="services-grid">
        {otherServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img className="service-image" src={service.image} alt={service.name} />
            <h4 className="service-name">{service.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

