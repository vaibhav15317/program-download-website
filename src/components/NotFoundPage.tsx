import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <main className="w" style={{ padding: '64px 0' }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Page not found</h1>
      <p style={{ marginBottom: 24 }}>This page doesn’t exist.</p>
      <Link to="/">Back to Smart Scholarship Engine</Link>
    </main>
  )
}
