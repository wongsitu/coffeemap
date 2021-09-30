import { useEffect, useState } from 'react';
import { COFEE_LIST } from './constants'
import starbucks from '../../icon/starbucks_logo.png'
import blueBottle from '../../icon/blue_bottle_logo.png'
import peets from '../../icon/peets_logo.png'
import gregorys from '../../icon/gregorys.png'

type BrandType = keyof typeof COFEE_LIST

const myStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

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
      if (selectedBrand === 'STARBUCKS') {
        COFEE_LIST[selectedBrand].forEach(({ position, label, address, zip, hours }) => {
          const marker = new google.maps.Marker({
            position,
            map: mapInstance,
            // label,
            clickable: true,
            icon: {
              url: starbucks,
              scaledSize: new google.maps.Size(20, 20),
            }
          });
          setMarkers(currentMarkers => [...currentMarkers, marker])
          const infowindow = new google.maps.InfoWindow({
            content: `<div>${label}<br><br>${address}<br>NY,${zip}
                        <div class='hours'>
                          <br>Mon: <span class='times'>${hours?.mon}</span>
                          <br>Tue: <span class='times'>${hours?.tue}</span>
                          <br>Wed: <span class='times'>${hours?.wed}</span>
                          <br>Thu: <span class='times'>${hours?.thu}</span>
                          <br>Fri: <span class='times'>${hours?.fri}</span>
                          <br>Sat: <span class='times'>${hours?.sat}</span>
                          <br>Sun: <span class='times'>${hours?.sun}</span>
                        </div>
                      </div>`,
          });
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              shouldFocus: false,
            });
          });
        })
      } else if (selectedBrand === 'BLUE_BOTTLE') {
        COFEE_LIST[selectedBrand].forEach(({ position, label, address, zip, hours }) => {
          const marker = new google.maps.Marker({
            position,
            map: mapInstance,
            // label,
            clickable: true,
            icon: {
              url: blueBottle,
              scaledSize: new google.maps.Size(20, 40),
            }
          });
          setMarkers(currentMarkers => [...currentMarkers, marker])
          const infowindow = new google.maps.InfoWindow({
            content: `<div>${label}<br><br>${address}<br>NY,${zip}
                        <div class='hours'>
                          <br>Mon: <span class='times'>${hours?.mon}</span>
                          <br>Tue: <span class='times'>${hours?.tue}</span>
                          <br>Wed: <span class='times'>${hours?.wed}</span>
                          <br>Thu: <span class='times'>${hours?.thu}</span>
                          <br>Fri: <span class='times'>${hours?.fri}</span>
                          <br>Sat: <span class='times'>${hours?.sat}</span>
                          <br>Sun: <span class='times'>${hours?.sun}</span>
                        </div>
                      </div>`,
          });
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              shouldFocus: false,
            });
          });
        })
      } else if (selectedBrand === 'GREGORYS_COFFEE') {
        COFEE_LIST[selectedBrand].forEach(({ position, label, address, zip, hours }) => {
          const marker = new google.maps.Marker({
            position,
            map: mapInstance,
            // label,
            clickable: true,
            icon: {
              url: gregorys,
              scaledSize: new google.maps.Size(30, 60),
            },
          });
          setMarkers(currentMarkers => [...currentMarkers, marker])
          const infowindow = new google.maps.InfoWindow({
            content: `<div>${label}<br><br>${address}<br>NY,${zip}
                        <div class='hours'>
                          <br>Mon: <span class='times'>${hours?.mon}</span>
                          <br>Tue: <span class='times'>${hours?.tue}</span>
                          <br>Wed: <span class='times'>${hours?.wed}</span>
                          <br>Thu: <span class='times'>${hours?.thu}</span>
                          <br>Fri: <span class='times'>${hours?.fri}</span>
                          <br>Sat: <span class='times'>${hours?.sat}</span>
                          <br>Sun: <span class='times'>${hours?.sun}</span>
                        </div>
                      </div>`,
          });
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              shouldFocus: false,
            });
          });
        })
      } else {
        COFEE_LIST[selectedBrand].forEach(({ position, label, address, zip, hours }) => {
          const marker = new google.maps.Marker({
            position,
            map: mapInstance,
            clickable: true,
            icon: {
              url: peets,
              scaledSize: new google.maps.Size(40, 40),
            }
          });

          setMarkers(currentMarkers => [...currentMarkers, marker])
          const infowindow = new google.maps.InfoWindow({
            content: `<div>${label}<br><br>${address}<br>NY,${zip}
                        <div class='hours'>
                          <br>Mon: <span class='times'>${hours?.mon}</span>
                          <br>Tue: <span class='times'>${hours?.tue}</span>
                          <br>Wed: <span class='times'>${hours?.wed}</span>
                          <br>Thu: <span class='times'>${hours?.thu}</span>
                          <br>Fri: <span class='times'>${hours?.fri}</span>
                          <br>Sat: <span class='times'>${hours?.sat}</span>
                          <br>Sun: <span class='times'>${hours?.sun}</span>
                        </div>
                      </div>`,
          });
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              shouldFocus: false,
            });
          });
        })
      }
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
