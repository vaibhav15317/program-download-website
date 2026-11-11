export const site = {
  name: 'Smart Scholarship Engine — Free desktop app',
  shortName: 'Smart Scholarship Engine',
  description:
    'Download Smart Scholarship Engine, a free Windows desktop app that matches your student profile to scholarships, with deadlines and links to official portals.',
}

/** Files served from public/downloads. Keep sizes in sync if the files change. */
export const downloads = {
  bundle: {
    href: '/downloads/SmartScholarshipEngine.zip',
    file: 'SmartScholarshipEngine.zip',
    size: '9 KB',
  },
  files: [
    {
      href: '/downloads/Run_Smart_Scholarship_Engine.bat',
      file: 'Run_Smart_Scholarship_Engine.bat',
      note: 'One-click launcher for Windows',
    },
    {
      href: '/downloads/smart_scholarship_engine.py',
      file: 'smart_scholarship_engine.py',
      note: 'The app itself (Python + PySide6)',
    },
    {
      href: '/downloads/requirements.txt',
      file: 'requirements.txt',
      note: 'Dependency list used by the launcher',
    },
  ],
}

export const team = [
  'Wasim Akram Kabir',
  'Saarans Singh',
  'Vaibhav Kumar Singh',
  'Yash Kumar',
]
