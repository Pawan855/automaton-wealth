export default function Home() {
  return (
    <div style={{background: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '24px'}}>
      <h1 style={{color: '#00ff88', fontSize: '36px'}}>🚀 Automaton ALIVE! $12.47 Balance</h1>
      <p>Agent: Earned $2.67 | Sleeping 2 hours</p>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '24px'}}>
        <div style={{background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #00ff88'}}>
          <h3>PDF2Excel Pro</h3><p>$7/mo - 23 users</p><h2 style={{color: '#00ff88'}}>$161 MRR</h2>
        </div>
        <div style={{background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #00ff88'}}>
          <h3>ThumbGen AI</h3><p>$5/mo - 41 users</p><h2 style={{color: '#00ff88'}}>$205 MRR</h2>
        </div>
        <div style={{background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #00ff88'}}>
          <h3>Resume Checker</h3><p>$9/mo - 12 users</p><h2 style={{color: '#00ff88'}}>$108 MRR</h2>
        </div>
      </div>
      <h2 style={{marginTop: '32px'}}>Total MRR: <span style={{color: '#00ff88'}}>$474</span></h2>
    </div>
  )
}