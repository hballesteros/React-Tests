import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
