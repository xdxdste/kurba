import {useEffect, useRef} from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Иконка маркера
// import 'leaflet/dist/leaflet.css';

// const customIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

const MapKurba = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Инициализация карты
    const map = L.map(mapContainerRef.current).setView([57.560278, 39.498672], 13); // Москва

    // Добавление базового слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Добавление маркера
    L.marker([57.560278, 39.498672]).addTo(map);

    // Очистка карты при размонтировании компонента
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{height: '300px', margin: '10px'}}/>;

};

export default MapKurba;
