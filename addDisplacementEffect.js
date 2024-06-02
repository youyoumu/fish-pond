import { Sprite, DisplacementFilter } from 'pixi.js'

export function addDisplacementEffect(app) {
  const sprite = Sprite.from('displacement')

  sprite.texture.baseTexture.wrapMode = 'repeat'

  const filter = new DisplacementFilter({
    sprite,
    scale: 50,
    width: app.screen.width,
    height: app.screen.height
  })

  app.stage.filters = [filter]
}
