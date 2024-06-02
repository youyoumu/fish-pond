import { Application, Assets } from 'pixi.js'

const app = new Application()
async function setup() {
  await app.init({ background: '#1099bb', resizeTo: window })
  document.body.appendChild(app.canvas)
}

async function preload() {
  const assets = [
    {
      alias: 'background',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg'
    },
    {
      alias: 'fish1',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/fish1.png'
    },
    {
      alias: 'fish2',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/fish2.png'
    },
    {
      alias: 'fish3',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/fish3.png'
    },
    {
      alias: 'fish4',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/fish4.png'
    },
    {
      alias: 'fish5',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/fish5.png'
    },
    {
      alias: 'overlay',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png'
    },
    {
      alias: 'displacement',
      src: 'https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png'
    }
  ]
  await Assets.load(assets)
}

setup()
preload()
