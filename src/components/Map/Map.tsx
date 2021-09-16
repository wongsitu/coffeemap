import { useEffect, useState } from 'react';
import { COFEE_LIST } from './constants'
import  starbucks  from '../../icon/starbucks_logo.png'

type BrandType = keyof typeof COFEE_LIST

const Map = () => {
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])
  const [selectedBrand, setSelectedBrand] = useState<BrandType | undefined>(undefined)
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (google) {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 40.758169722616834,lng: -73.9855318731300 },
        zoom: 13,
        draggable: true,
      });

      setMapInstance(map)
    }
  }, [])

  useEffect(() => {
    if (selectedBrand) {
      COFEE_LIST[selectedBrand].forEach(({ position, label }) => {
        const marker = new google.maps.Marker({
          position,
          map: mapInstance,
          label,
          clickable: true,
          icon: {
            url: starbucks,
            scaledSize: new google.maps.Size(20, 20),
          }
        });
        setMarkers(currentMarkers => [...currentMarkers, marker])
      })
    }
  }, [mapInstance, selectedBrand])

  const onSelectBrand = (brand: BrandType) => {
    if (brand !== selectedBrand) {
      markers.forEach(marker => marker.setMap(null));
      setSelectedBrand(brand)
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div id="map" style={{ height: '50vw', width: '50vw', margin:'auto' }} />
      <div style={{
        position: "absolute",
        backgroundColor: 'white',
        padding: 16,
        zIndex: 9,
        top: 0,
        display: "flex",
        flexDirection: 'column',
      }}>
        {Object.keys(COFEE_LIST).map(brand => (
          <button key={brand} style={{ marginBottom: 16 }} onClick={() => { onSelectBrand(brand as BrandType) }}>
            {brand}
          </button>
        ))}
      </div>
    </div>);
}

export default Map;
