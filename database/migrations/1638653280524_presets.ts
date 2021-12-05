import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Presets extends BaseSchema {
  protected tableName = 'presets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 200).notNullable()
      table.integer('pan').notNullable()
      table.integer('tilt').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
