export interface Article {
    title: string;
    abstract: string;
    url: string;
    published_date: string;
    multimedia: {
        url: string;
        format: string;
        height: number;
        width: number;
        type: string;
        subtype: string;
        caption: string;
        copyright: string;
    }[];
    byline: string;
    section: string;
    views?: number; // Added for UI compatibility
}

export interface NYTResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: Article[];
}

