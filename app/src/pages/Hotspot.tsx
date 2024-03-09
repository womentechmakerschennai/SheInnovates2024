import React from "react";
import ReactDOM from "react-dom";
import { HMap, HMapCircle, HMapMarker, HPlatform } from "react-here-map";

const points = [
  { lat: 52.5309825, lng: 13.3845921 },
  { lat: 52.5311923, lng: 13.3853495 },
  { lat: 52.5313532, lng: 13.3861756 },
  { lat: 52.5315142, lng: 13.3872163 },
  { lat: 52.5316215, lng: 13.3885574 },
  { lat: 52.5320399, lng: 13.3925807 },
  { lat: 52.5321472, lng: 13.3935785 },
];

export const Hotspot = () => {
    return <>
        
        <HPlatform
  options={{
    apiKey: 'TIAGlD6jic7l9Aa8Of8IFxo3EUemmcZlHm_agfAm6Ew',
    appId: 'EF8K24SYpkpXUO9rkbfA',
    includePlaces: false,
    includeUI: true,
    interactive: true,
    version: 'v3/3.1'
  }}
>
  <HMap
    options={{
      center: {
        lat: 52,
        lng: 5
      }
    }}
    style={{
      height: '480px',
      width: '100%'
    }}
    useEvents
  >
    {/* <HMapMarker
      coords={{
        lat: 52.5309825,
        lng: 13.3845921
      }}
      events={{
        pointerdown: function noRefCheck(){},
        pointerenter: function noRefCheck(){},
        pointerleave: function noRefCheck(){},
        pointermove: function noRefCheck(){}
      }}
      icon="<svg width=&quot;24&quot; height=&quot;24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><rect stroke=&quot;white&quot; fill=&quot;#1b468d&quot; x=&quot;1&quot; y=&quot;1&quot; width=&quot;22&quot; height=&quot;22&quot; /><text x=&quot;12&quot; y=&quot;18&quot; font-size=&quot;12pt&quot; font-family=&quot;Arial&quot; font-weight=&quot;bold&quot; text-anchor=&quot;middle&quot; fill=&quot;white&quot;>H</text></svg>"
      options={{
        style: {
          lineWidth: 2
        }
      }}
      setVisibility
    /> */}
  </HMap>
</HPlatform>
    </>
}
