import { sql } from '../_db.js';
import { requireAuth } from '../_auth.js';

// Neon's HTTP driver returns `timestamp` columns as JS Date objects,
// treating the stored value as UTC. JSON.stringify(Date) then shifts
// it again by the local UTC offset. Fix: format using getUTC* methods
// to extract the stored value as-is, and return a plain string (no Z).
const formatEvent = (event) => {
  if (!event || !event.event_date) return event;
  const d = event.event_date;
  if (d instanceof Date) {
    const pad = (n) => String(n).padStart(2, '0');
    event.event_date = `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
  }
  return event;
};

export default async function handler(req, res) {
  try {
    if (req.method === 'OPTIONS') return res.status(200).end();
    
    if (req.method === 'GET') {
      const events = await sql`
        SELECT * FROM events 
        ORDER BY event_date ASC
      `;
      return res.status(200).json(events.map(formatEvent));
    } 
    
    if (req.method === 'POST') {
      if (!requireAuth(req, res)) return;
      
      const { title, description, event_date, location, image_url, registration_link, capacity } = req.body;
      
      const newEvent = await sql`
        INSERT INTO events (title, description, event_date, location, image_url, registration_link, capacity)
        VALUES (${title}, ${description}, ${event_date}::timestamp, ${location}, ${image_url}, ${registration_link}, ${capacity})
        RETURNING *
      `;
      
      return res.status(201).json(formatEvent(newEvent[0]));
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
