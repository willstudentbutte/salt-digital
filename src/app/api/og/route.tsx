import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Salt Digital - Growth Marketing Agency'
  const description = searchParams.get('description') || 'Transform your business with data-driven marketing strategies'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #F9FAFB 0%, #005FCE 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '24px',
            padding: '60px',
            margin: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#11324D',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            Salt<span style={{ color: '#005FCE' }}>Digital</span>
          </div>
          
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#11324D',
              marginBottom: '16px',
              lineHeight: 1.3,
              maxWidth: '800px',
            }}
          >
            {title}
          </div>
          
          <div
            style={{
              fontSize: '24px',
              color: '#6B7280',
              lineHeight: 1.4,
              maxWidth: '600px',
            }}
          >
            {description}
          </div>
          
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(90deg, #005FCE, #2B79FF)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Book Strategy Call
            </div>
            
            <div
              style={{
                color: '#34D399',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              97% Retention • $18M+ Managed • 4.9★ Rating
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
} 