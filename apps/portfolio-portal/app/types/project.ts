export interface RawProject {
    title: string;
    description: string;
    image: {
        _type: 'image';
        asset: {
            _type: 'reference';
            _ref: string;
        }
    };
    githubLink: string;
    liveLink: string;
}

export interface ProcessedProject {
    title: string;
    description: string;
    src: string;
    alt: string;
    githubLink: string;
    liveLink: string;
}
