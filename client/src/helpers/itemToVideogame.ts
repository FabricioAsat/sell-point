import { toast } from "sonner";
import { IVideogame } from "../types/items";

export function itemToVideogame(item: IVideogame): object {
  const regexUpc = /^\d{1,12}$/;
  const regexEan = /^\d{1,13}$/;

  if (
    (item.UPC && !regexUpc.test(item.UPC)) ||
    (item.EAN && !regexEan.test(item.EAN))
  ) {
    toast.error("Invalid UPC or EAN values");
    return {};
  }

  const bodyData = {
    title: item.Title,
    description: item.Description,
    esrb: item.ESRB,
    platform: item.Platform,
    upc: item.UPC,
    ean: item.EAN,
    studio: item.Studio,
    image: item.Image,
    price: Number(item.Price),
    published_at: new Date(
      Number(item.Year || 0),
      Number(item.Month || 0),
      Number(item.Days || 0)
    ),
    tags: item?.Tags?.split(", ").map((nombre) => nombre.trim()) || [],
    group: item.Group,
    notes: item.Notes,
  };

  return { type: "videogame", data: bodyData };
}