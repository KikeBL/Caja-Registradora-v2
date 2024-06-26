import { Client } from "@notionhq/client";

export type product = {
    id: string;
    producto: string;
    cover: string | undefined;
    rename: string;
    price: number;
    allergens: string[];
    cantidad: number;
}

export async function getAllProducts(): Promise<product[]> {
    const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

    //NOTE - Listado de tartas
    const pages = await notion.databases.query({
        database_id: import.meta.env.NOTION_PRODUCTOS_DATABASE_ID,
        // Add a filter here.
        filter: {
            property: "Disponible en",
            multi_select: {
                contains: "Mercadillo"
            }
        }
    });

    //NOTE - Response formatter
    const events = pages.results
        .map((page: any) => {
            return {
                id: page.id,
                producto: page.properties.Producto.title[0].plain_text,
                cover: page.cover ? (page.cover.external ? page.cover.external.url : page.cover.file.url) : null,
                rename: page.properties.Rename.rich_text[0] ? page.properties.Rename.rich_text[0].plain_text : "",
                price: page.properties["PVP/porcion"] ? page.properties["PVP/porcion"].formula.number : 0,
                allergens: page.properties.Allergens.multi_select.map((x: any) => { return x.name }),
                cantidad: 0
            };
        })
    return events
}

export async function saveSell() {
    const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

    //NOTE - Listado de tartas
    const pages = await notion.databases.query({
        database_id: import.meta.env.NOTION_PRODUCTOS_DATABASE_ID,
        // Add a filter here.
        filter: {
            property: "Disponible en",
            multi_select: {
                contains: "Mercadillo"
            }
        }
    });

    //NOTE - Response formatter
    const events = pages.results
        .map((page: any) => {
            return {
                id: page.id,
                producto: page.properties.Producto.title[0].plain_text,
                cover: page.cover ? (page.cover.external ? page.cover.external.url : page.cover.file.url) : null,
                rename: page.properties.Rename.rich_text[0] ? page.properties.Rename.rich_text[0].plain_text : "",
                price: page.properties["PVP Mercadillo"] ? page.properties["PVP Mercadillo"].number : 0,
                allergens: page.properties.Allergens.multi_select.map((x: any) => { return x.name }),
                cantidad: 0
            };
        })
    return events
}