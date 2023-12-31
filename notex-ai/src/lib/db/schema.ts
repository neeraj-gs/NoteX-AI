import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core'

export const $notes = pgTable('notes',{
    id: serial('id').primaryKey(),
    name:text('name').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    imageUrl: text('image_url'),
    userId: text('user_id').notNull(), //this user id comes from the clerk userid
    editorState: text('editor_state')
})

export type NoteType = typeof $notes.$inferSelect;
//drizzle kit helps us migratee cahnges to the databar also gives  astudio to view databse and more