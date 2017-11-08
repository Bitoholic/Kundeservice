interface FAQ {
    Id: number,
    Category: string,
    GlyphIcon: string,
    QAList: Array<QA>
}

interface QA {
    Id: number,
    Question: string,
    Answer: string
}

interface SearchResult {
    id: number;
    value: number;
    category: string;
    qa: QA;
}