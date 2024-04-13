import { defineDb, defineTable, column } from 'astro:db';

const Sells = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
  }
})

export default defineDb({
  tables: { Sells },
})