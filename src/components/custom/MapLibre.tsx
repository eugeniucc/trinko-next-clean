'use client'

import { Map as MapLibreMap, Marker, NavigationControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef } from 'react'

export default function Map3D() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const map = new MapLibreMap({
      container: ref.current,
      style: `https://api.maptiler.com/maps/voyager/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [28.8558081, 47.0146631],
      zoom: 17,
      pitch: 45,
      bearing: -20
    })

    map.addControl(new NavigationControl(), 'top-right')

    map.on('load', () => {
      map.addSource('terrain', {
        type: 'raster-dem',
        url: `https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`
      })
      map.setTerrain({ source: 'terrain', exaggeration: 1 })

      if (!map.getSource('buildings')) {
        map.addSource('buildings', {
          type: 'vector',
          url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`
        })
      }

      const layers = map.getStyle().layers || []
      const labelLayer = layers.find((l) => l.type === 'symbol' && l.layout?.['text-field'])
      const labelLayerId = labelLayer?.id || layers[layers.length - 1]?.id

      map.addLayer(
        {
          id: '3d-buildings',
          source: 'buildings',
          'source-layer': 'building',
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': 'lightgray',
            'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 16, ['get', 'render_height']],
            'fill-extrusion-base': ['get', 'render_min_height'],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      )

      const el = document.createElement('a')
      el.href =
        'https://www.google.com/maps/place/Oblivion+Tattoo/@47.0152922,28.8552417,18z/data=!4m6!3m5!1s0x40c97d9e976ff8b9:0x377bd476e7ac7a94!8m2!3d47.015286!4d28.855885!16s%2Fg%2F11xvjt6q7_?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D'
      el.target = '_blank'
      el.rel = 'noopener noreferrer'
      el.style.display = 'flex'
      el.style.flexDirection = 'column'
      el.style.alignItems = 'center'
      el.style.textAlign = 'center'
      el.style.textDecoration = 'none'

      const logo = document.createElement('div')
      logo.style.backgroundImage = `url('/logo/logo.png')`
      logo.style.width = '64px'
      logo.style.height = '91px'
      logo.style.backgroundSize = 'contain'
      logo.style.backgroundRepeat = 'no-repeat'

      el.appendChild(logo)

      new Marker({ element: el }).setLngLat([28.85585, 47.0148]).addTo(map)
    })

    return () => map.remove()
  }, [])

  return <div ref={ref} className="h-[500px] w-full" />
}
