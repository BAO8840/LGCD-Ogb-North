/* Site content and contact details. Edit this file to update the website.
   Empty lists show a friendly "coming soon" message on the page. */
window.SITE_DATA = {
  contact: { phone: '+2349067610317', whatsapp: '2347046252092', email: 'abdulsalamb829@gmail.com', emergency: '115',
    address: 'Beside LAUTECH College of Health Sciences, Ogbomoso, Oyo State', hours: 'Monday to Friday, 8:00am to 5:00pm' },
  /* Ward names: confirm against the official ward list before launch */
  wards: ['Aaje/Ogunbado', 'Abogunde', 'Aguodo', 'Isale Afon', 'Isale Alaasa', 'Masifa', 'Oke Agbede', 'Ora/Saja', 'Not sure'],
  /* Row formats: schools {name, ward, level, ownership}; projects {title, ward, sector, stage};
     vacancies {title, department, closes}; policies {title, department, status, link};
     publications {title, type, year, link}; documents {title, period, link};
     assets {name, type, ward, condition}; reports {title, period, link} */
  schools: [], projects: [], vacancies: [], policies: [], publications: [], documents: [], assets: [], reports: [],
  /* Search index: t = title, u = page, k = keywords */
  search: [
    { t: 'Home', u: 'index.html', k: 'council ogbomoso north welcome contact' },
    { t: 'Education', u: 'education.html', k: 'school enrol pupils teachers learning lautech' },
    { t: 'Research and Implementation', u: 'research.html', k: 'projects research proposal progress' },
    { t: 'Workforce', u: 'workforce.html', k: 'jobs vacancies staff departments siwes nysc internship' },
    { t: 'Policies and Support', u: 'policies.html', k: 'bye-law policy support farmers traders levy' },
    { t: 'Ethics', u: 'ethics.html', k: 'integrity report corruption foi information budget' },
    { t: 'Infrastructure', u: 'infrastructure.html', k: 'roads drains markets street lights health centre' },
    { t: 'Report and Monitoring', u: 'reports.html', k: 'report issue fault complaint contact phone whatsapp' },
    { t: 'Privacy notice', u: 'privacy.html', k: 'privacy data protection' }
  ]
};
