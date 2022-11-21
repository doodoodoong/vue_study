import { Client } from '@notionhq/client'

export default async (req, res) => {
  // secret key
  const notion = new Client({ auth: process.env.VUE_APP_NOTION_TOKEN })

  // database id
  if (req.method === 'POST') {
    // todo: handle post
  } else {
    //handle get
    const database = await notion.database.query({
      database_id: process.env.VUE_APP_NOTION_DATABASE_ID,
    })
    const suggestions = []

    database.results.map((row) => {
      suggestions.push({
        id: row.id,
        title: row.properties.Title.title[0].text.content,
      })
    })
  }
  return {
    suggestions,
  }
}
