import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';

import { COFEE_LIST, iconUrls } from './constants'
import { CoffeeType, BrandType } from './types';

const myStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

const renderLabels = ({ label, address, zip, hours }: CoffeeType) => {
  return renderToString(
    <div>{label}<br />{address}<br />NY,{zip}
      {hours && (
        <div className='hours'>
          <br />Mon: <span className='times'>${hours?.mon}</span>
          <br />Tue: <span className='times'>${hours?.tue}</span>
          <br />Wed: <span className='times'>${hours?.wed}</span>
          <br />Thu: <span className='times'>${hours?.thu}</span>
          <br />Fri: <span className='times'>${hours?.fri}</span>
          <br />Sat: <span className='times'>${hours?.sat}</span>
          <br />Sun: <span className='times'>${hours?.sun}</span>
        </div>
      )}
    </div>
  )
}

const Map = () => {
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  const [selectedBrand, setSelectedBrand] = useState<BrandType | undefined>(undefined)
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (google) {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 40.73289966190088, lng: -73.99639321053182 },
        zoom: 14,
        draggable: true,
        styles: myStyles
      });

      setMapInstance(map)
    }
  }, [])

  useEffect(() => {
    if (selectedBrand) {
      COFEE_LIST[selectedBrand].forEach(({ position, label, address, zip, hours }) => {
        const marker = new google.maps.Marker({
          position,
          map: mapInstance,
          clickable: true,
          icon: {
            url: iconUrls[selectedBrand],
            scaledSize: new google.maps.Size(20, 20),
          }
        });
        setMarkers(currentMarkers => [...currentMarkers, marker])

        let content = renderLabels({ position, label, address, zip, hours });

        const infowindow = new google.maps.InfoWindow({
          content,
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            shouldFocus: false,
          });
        });
      })
    }
  }, [mapInstance, selectedBrand])

  const onSelectBrand = (brand: BrandType) => {
    // if (brand !== selectedBrand)
    // markers.forEach(marker => marker.setMap(null));
    setSelectedBrand(brand)
    // }
  }

  const clear = () => {
    markers.forEach(marker => marker.setMap(null))
    setSelectedBrand(undefined)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ height: '100vh', width: 'auto', margin: 'auto' }} />
      <div style={{
        position: "absolute",
        backgroundColor: 'none',
        padding: 16,
        zIndex: 9,
        top: 80,
        display: "flex",
        flexDirection: 'column',
      }}>
        {Object.keys(COFEE_LIST).map(brand => (
          <button key={brand} style={{ marginBottom: 16 }} onClick={() => { onSelectBrand(brand as BrandType) }}>
            {brand}
          </button>
        ))}
        <button id='clear' onClick={() => { clear() }}>Clear All</button>
      </div>
    </div>);
}

export default Map;
