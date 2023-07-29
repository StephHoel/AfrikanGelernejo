import { Route, Routes } from 'react-router-dom'

import Page from './pages/Page'

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<Page />} />
      {/* mudar path para AfrikanGelernejo/ */}
    </Routes>
  )
}
