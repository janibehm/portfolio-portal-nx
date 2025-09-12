
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./clients";

const builder = imageUrlBuilder(client);

export interface SanityImageSource {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
    [key: string]: unknown;
}

export function urlFor(source: SanityImageSource) {
    return builder.image(source).format('webp').quality(85);
}

export function urlForFormat(source: SanityImageSource, format: 'webp' | 'jpg' | 'png' = 'webp') {
    return builder.image(source).format(format).quality(85);
}
