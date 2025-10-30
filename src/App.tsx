import { Layout } from './components/Layout.tsx'
import { SystemsTable } from './components/SystemTable.tsx'
import { HealthOverview } from './components/HealthOverview.tsx'

function App() {

  return (
    <Layout>
      <HealthOverview />
      <SystemsTable />
    </Layout>
  )
}

export default App
