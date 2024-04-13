import { Client } from "@notionhq/client";

export default class Note {

    async saveSell(pageProperties: any): Promise<void> {
        const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

        //NOTE - Listado de tartas
        const newPage = await notion.pages.create({
            parent: {
                database_id: import.meta.env.NOTION_VENTAS_DATABASE_ID,
            },
            properties: pageProperties
        });
    }

}