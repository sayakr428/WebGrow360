import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

app.use(cors())
app.use(express.json())

// 👇 Request logger (add kiya)
app.use((req, _res, next) => {
  console.log('REQ:', req.method, req.path)
  next()
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/leads', async (req, res) => {
  try {
    const { name, phone, message, pageUrl, utm } = req.body || {}

    const lead = await prisma.whatsappLead.create({
      data: {
        name,
        phone,
        message,
        pageUrl,
        utmSource: utm?.source ?? null,
        utmMedium: utm?.medium ?? null,
        utmCampaign: utm?.campaign ?? null,
        userAgent: req.headers['user-agent']?.toString() ?? null,
        referer: req.headers['referer']?.toString() ?? null,
      },
    })

    res.json({ ok: true, id: lead.id })
  } catch (e: any) {
    console.error('POST /api/leads error:', e)
    res.status(500).json({ ok: false, error: e?.message || 'failed' })
  }
})

app.get('/api/leads', async (_req, res) => {
  const rows = await prisma.whatsappLead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })
  res.json(rows)
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
