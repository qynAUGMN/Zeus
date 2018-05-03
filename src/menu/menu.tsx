import * as React from 'react'
import styled from 'styled-components'

const MenuStyled = styled.div`
  margin-right: 40px;
  padding: 24px 0;
  width: 212px;
  font-size: ${({theme}) => theme.font.size.md}px;
  line-height: 28px;
  text-align: center;
  background: ${({theme}) => theme.palette.white};
`

interface Props {
  value?: string
  onChange?: any
}

interface State {
  activeName: string
}

export default class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      activeName: props.value
    }
  }

  onItemClick(name: string) {
    this.setState({
      activeName: name
    }, () => {
      this.props.onChange(name)
    })
  }

  render() {
    return (
      <MenuStyled>
        {React.Children.map(this.props.children, (child: any, index: number) => {
          const name = child.props.name || index.toString()

          return React.cloneElement(child, {
            isActive: this.state.activeName === name,
            key: index,
            name: name,
            onClick: (item: string) => this.onItemClick(item)
          })
        })}
      </MenuStyled>
    )
  }
}
