import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";



export class GifMapper {
  static mapGiphyItemToGif ( gipgiItem: GiphyItem ) :Gif {
    return {
      title: gipgiItem.title,
      url: gipgiItem.images.original.url,
      id: gipgiItem.id
    }
  }


  static mapGiphyItemsToGifArray(gipgiItems: GiphyItem[]):Gif[] {
    return gipgiItems.map(this.mapGiphyItemToGif)
  }
}
