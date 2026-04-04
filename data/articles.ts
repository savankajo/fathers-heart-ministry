export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  language: 'English' | 'Arabic';
  pdfPath: string;
}

export const ALL_ARTICLES: Article[] = [
  {
    id: 'divine-peace-en',
    title: 'Divine Peace (Shalom)',
    description: 'The Peace That Surpasses All Understanding — The Goal of Faith and the Salvation of the Soul.',
    date: '2026-04-04',
    language: 'English',
    pdfPath: '/articles/divine_peace_en.pdf'
  },
  {
    id: 'divine-peace-ar',
    title: 'السلام الإلهي (شالوم)',
    description: 'تحليل عميق للسلام الإلهي الذي يفوق كل عقل وكيفية التماد في الإيمان ونضج النفس.',
    date: '2026-04-04',
    language: 'Arabic',
    pdfPath: '/articles/divine_peace_ar.pdf'
  },
  {
    id: 'the-mind-en',
    title: 'The Mind',
    description: 'The True Battlefield — How the Mind Works, and Why God Calls Us to Renew It.',
    date: '2026-04-03',
    language: 'English',
    pdfPath: '/articles/the_mind_en.pdf'
  },
  {
    id: 'the-mind-ar',
    title: 'الذهن',
    description: 'فهم كيفية عمل الذهن كبوابة للحياة وكيف يريد الله تغييره بصور من كلمته.',
    date: '2026-04-03',
    language: 'Arabic',
    pdfPath: '/articles/the_mind_ar.pdf'
  },
  {
    id: 'soul-salvation-3-en',
    title: 'The Salvation of the Soul - Part 3',
    description: 'The Renewed Mind — Key to Blessing and Prosperity in Christ.',
    date: '2026-04-02',
    language: 'English',
    pdfPath: '/articles/soul_salvation_3_en.pdf'
  },
  {
    id: 'soul-salvation-3-ar',
    title: 'خلاص النفس - الجزء الثالث',
    description: 'دراسة حول كيفية تأثير الذهن المجدد على بركات الرب وازدهار الحياة الروحية.',
    date: '2026-04-02',
    language: 'Arabic',
    pdfPath: '/articles/soul_salvation_3_ar.pdf'
  },
  {
    id: 'soul-salvation-2-en',
    title: 'The Salvation of the Soul - Part 2',
    description: 'Renewing the Mind and Walking in Partnership with the Holy Spirit.',
    date: '2026-04-01',
    language: 'English',
    pdfPath: '/articles/soul_salvation_2_en.pdf'
  },
  {
    id: 'soul-salvation-2-ar',
    title: 'خلاص النفس - الجزء الثاني',
    description: 'أهمية تجديد الذهن وكيفية السير في شركة يومية مع الروح القدس.',
    date: '2026-04-01',
    language: 'Arabic',
    pdfPath: '/articles/soul_salvation_2_ar.pdf'
  },
  {
    id: 'soul-salvation-1-en',
    title: 'The Salvation of the Soul - Part 1',
    description: 'Moving Beyond Spiritual Birth Toward Complete Maturity in Christ.',
    date: '2026-03-31',
    language: 'English',
    pdfPath: '/articles/soul_salvation_1_en.pdf'
  },
  {
    id: 'soul-salvation-1-ar',
    title: 'خلاص النفس - الجزء الأول',
    description: 'فهم حقيقة النفس وكيفية نضجها الروحي بعد تجربة الولادة الجديدة.',
    date: '2026-03-31',
    language: 'Arabic',
    pdfPath: '/articles/soul_salvation_1_ar.pdf'
  }
];
