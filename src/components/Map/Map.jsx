import React from 'react';

const Map = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Карта Mapbox</title>
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" rel="stylesheet" />
      <div className={style.map}></div>

      <script src="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"></script>
      <script>
        mapboxgl.accessToken = 'ВАШ_API_КЛЮЧ'; var map = new mapboxgl.Map(
        {((container = 'map'), (style = 'mapbox://styles/mapbox/streets-v11'), (center = [37.6173, 55.7558]))}); var
        marker = new mapboxgl.Marker() .setLngLat([37.6173, 55.7558]) .setPopup(new mapboxgl.Popup().setHTML('
        <h1>Москва</h1>')) // Добавление всплывающего окна .addTo(map);
      </script>
    </div>
  );
};

export default Map;
