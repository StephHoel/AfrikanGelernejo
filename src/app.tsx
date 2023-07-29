import { Route, Routes } from 'react-router-dom'

import Page from './pages/Page'

export default function App() {
  return (
    <Routes>
      {/* usar no local */}
      <Route path="/" index element={<Page />} />

      {/* usar quando subir */}
      <Route path="AfrikanGelernejo/" index element={<Page />} />
    </Routes>
  )
}
