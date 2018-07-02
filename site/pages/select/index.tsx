/* tslint:disable */

import * as React from 'react'
import { Select } from '../../../src'

export default class Page extends React.Component {
  state = {
    options: [],
    q_image_user_package_id: 'chocolate'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        options: [
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]
      })
    }, 2000)
  }

  change = option => {
    this.setState({ q_image_user_package_id: option.value })
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Select
          isSearchable={false}
          value={this.state.q_image_user_package_id}
          options={this.state.options}
          onChange={this.change}
        />
      </div>
    )
  }
}