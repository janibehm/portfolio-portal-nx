
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./clients";

const builder = imageUrlBuilder(client);

export interface SanityImageSource {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
    [key: string]: any;
}

export function urlFor(source: SanityImageSource): ReturnType<typeof builder.image> {
    return builder.image(source);
}
