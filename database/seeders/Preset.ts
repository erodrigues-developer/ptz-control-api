import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Preset from 'App/Models/Preset'

export default class PresetSeeder extends BaseSeeder {
  public async run () {
    let presets = [
      {
        name: 'default',
        pan: 90,
        tilt: 90,
      },
    ]

    for(let preset of presets) {
      let presetData = await Preset.findBy('name', preset.name)
      if (presetData) {
        presetData.name = preset.name
        presetData.pan = preset.pan
        presetData.tilt = preset.tilt
        await presetData.save()
      } else {
        presetData = new Preset()
        presetData.name = preset.name
        presetData.pan = preset.pan
        presetData.tilt = preset.tilt
        await presetData.save()
      }
    }
  }
}
