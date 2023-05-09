import { dom, mount } from '@wallerbuilt/mycelia'
import Sample from '@/components/Sample'

import './style.css'

const appSelector = "#app"

const { div } = dom

const App = div({}, Sample)

mount(App, appSelector)