import React from 'react'
import { render } from 'react-dom'
import { Provider } from '~/state'
import App from '~/app'

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
