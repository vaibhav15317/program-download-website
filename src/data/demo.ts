// Example schemes for the in-browser preview only. They are not real schemes.
// Rules: minimum marks, maximum income, allowed courses, categories and states (null = any).
export type DemoScheme = {
  n: string
  o: string
  a: string
  m: number
  i: number
  c: string[] | null
  k: string[] | null
  s: string[] | null
  d: string
}

export const courses = [
  'Engineering',
  'Medicine',
  'Science',
  'Commerce',
  'Arts',
]
export const categories = ['General', 'OBC', 'SC', 'ST', 'EWS']
export const states = [
  'Karnataka',
  'Maharashtra',
  'Tamil Nadu',
  'Delhi',
  'Uttar Pradesh',
  'Other',
]

export const demoSchemes: DemoScheme[] = [
  {
    n: 'Merit Excellence Award',
    o: 'Example Education Trust',
    a: '₹50,000 / year',
    m: 75,
    i: 800000,
    c: ['Engineering', 'Science', 'Commerce'],
    k: null,
    s: null,
    d: '2026-11-20',
  },
  {
    n: 'Women in Technology Grant',
    o: 'Example Tech Foundation',
    a: '₹75,000 one time',
    m: 70,
    i: 600000,
    c: ['Engineering', 'Science'],
    k: null,
    s: null,
    d: '2026-12-05',
  },
  {
    n: 'State Post-Matric Scheme',
    o: 'Example State Department',
    a: '₹30,000 / year',
    m: 50,
    i: 250000,
    c: null,
    k: ['SC', 'ST', 'OBC'],
    s: ['Karnataka', 'Tamil Nadu'],
    d: '2027-02-28',
  },
  {
    n: 'Economically Weaker Section Aid',
    o: 'Example Central Board',
    a: '₹25,000 / year',
    m: 60,
    i: 400000,
    c: null,
    k: ['EWS', 'General'],
    s: null,
    d: '2026-12-15',
  },
  {
    n: 'Future Doctors Scholarship',
    o: 'Example Health Society',
    a: '₹1,00,000 / year',
    m: 80,
    i: 900000,
    c: ['Medicine'],
    k: null,
    s: null,
    d: '2027-01-10',
  },
  {
    n: 'Karnataka Merit Fellowship',
    o: 'Example State Council',
    a: '₹40,000 / year',
    m: 70,
    i: 700000,
    c: ['Engineering', 'Science', 'Arts', 'Commerce'],
    k: null,
    s: ['Karnataka'],
    d: '2026-11-28',
  },
  {
    n: 'First Generation Learner Grant',
    o: 'Example Community Fund',
    a: '₹20,000 / year',
    m: 55,
    i: 300000,
    c: null,
    k: null,
    s: null,
    d: '2027-01-25',
  },
  {
    n: 'Arts & Humanities Bursary',
    o: 'Example Culture Trust',
    a: '₹35,000 one time',
    m: 65,
    i: 500000,
    c: ['Arts'],
    k: null,
    s: null,
    d: '2026-12-30',
  },
]
