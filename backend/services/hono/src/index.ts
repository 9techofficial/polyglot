import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import dotenv from 'dotenv'

dotenv.config()
const port = Number(process.env.PORT) || 4005

const app = new Hono()
app.get('/api', (c) => c.json({ message: 'Welcome to hono service' }))

serve({ fetch: app.fetch, port })
