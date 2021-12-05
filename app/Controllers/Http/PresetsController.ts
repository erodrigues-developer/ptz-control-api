import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Preset from 'App/Models/Preset'

export default class PresetsController {
  public async index({response}: HttpContextContract) {
    const presets = await Preset.all()
    return response.send(presets)
  }

  public async create({request, response}: HttpContextContract) {
    const preset = new Preset()
    preset.fill(request.all())
    await preset.save()
    return  response.status(201).send(preset)
  }

  public async show({request, response}: HttpContextContract) {
    const id = request.param('id')
    const preset = await Preset.findByOrFail('id', id)
    return response.send(preset)
  }

  public async update({request, response}: HttpContextContract) {
    const id = request.param('id')
    const preset = await Preset.findByOrFail('id', id)
    preset.fill(request.all())
    preset.id = id
    await preset.save()
    return response.status(202).send(preset)
  }

  public async destroy({request, response}: HttpContextContract) {
    const id = request.param('id')
    const preset = await Preset.findByOrFail('id', id)
    preset.delete()
    return response.status(204)
  }
}
