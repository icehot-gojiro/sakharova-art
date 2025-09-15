export default function About() {
  return (
    <div className='p-12 max-w-3xl mx-auto text-lg leading-relaxed'>
      <h1 className='text-2xl font-bold mb-4'>Evgenia Sakharova-Heidarsson</h1>
      <p className='mb-6'>Graphic Designer · Artist · Art Director</p>

      <div className='mb-10 space-y-4'>
        <p>
          <strong>Evgenia Sakharova (b. 1990, USSR)</strong> — artist, designer,
          and art director based in Mývatn, North Iceland. Her artistic practice
          explores the interconnection of nature, personal memory, and emotional
          sensitivity. In Evgenia’s works, plants and natural materials become
          carriers of history and metaphors of human experience. She combines
          different media — from graphics and watercolor to installations and
          objects — creating spaces for reflection on transience and resilience,
          on time and transformation.
        </p>
        <p>
          Sakharova’s works can be seen as an attempt to preserve the fragile
          traces of both the inner and outer worlds — reminders that nature and
          humans are bound together in a shared rhythm.
        </p>
        <p>
          <strong>Contacts:</strong> blomlist@gmail.com
        </p>
      </div>

      <h2 className='text-xl font-semibold mt-8 mb-2'>Selected Exhibitions</h2>
      <ul className='list-disc list-inside space-y-1'>
        <li>
          2025 – Exhibitions in North and South Iceland, Vatnajökulsþjóðgarður,
          Iceland
        </li>
        <li>2024 – Gígur gestastofa, Iceland</li>
        <li>2023 – Biennale “Golden Bee”, Serbia & Russia</li>
        <li>2018 – Group Exhibition, Seoul, South Korea</li>
        <li>2011 – Group Exhibition (Watercolor), Seoul, South Korea</li>
        <li>2011 – Open-Air Art Workshops, Turkey & Russia</li>
        <li>2010 – Group Exhibition (Graphics), Moscow, Russia</li>
        <li>2010 – Murals for the Art Festival, Nizhny Novgorod, Russia</li>
        <li>2007 – Russian Art Week (Graphics), Moscow, Russia</li>
        <li>2004 – Exhibition of Emerging Artists, Moscow, Russia</li>
        <li>2001 – “Heritage”, Turkey</li>
        <li>1999 – “Cultural Code”, Saint Petersburg, Russia</li>
      </ul>

      <h2 className='text-xl font-semibold mt-8 mb-2'>Editorial Work</h2>
      <p>2010–2011 – Art & Fashion Editor, Art Festival magazine, Russia</p>

      <h2 className='text-xl font-semibold mt-8 mb-2'>Education</h2>
      <ul className='list-disc list-inside space-y-1'>
        <li>2022 – BoldItalic College, Typography & Type Design</li>
        <li>2021 – BangBangEducation, Design & Art</li>
        <li>2018–2022 – California Institute of the Arts, Design</li>
        <li>2007–2013 – Russian State University, Design & Fine Arts</li>
        <li>2006–2007 – Moscow State University of Arts, Design</li>
        <li>2005–2007 – Private Lyceum “School of Arts”</li>
        <li>2004–2005 – College of Arts, Folk Art Department</li>
        <li>1996–2003 – Private Art School</li>
      </ul>

      <div className='mt-12'>
        <img src='/images/about-photo.jpg' alt='About' className='rounded-lg shadow-md'/>
      </div>
    </div>
  )
}
