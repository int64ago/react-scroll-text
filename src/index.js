import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class ScrollText extends React.Component {
  static propTypes = {
    speed: PropTypes.number,
    children: PropTypes.string.isRequired
  }
  static defaultProps = {
    speed: 100
  }

  handleDurationUpdate = () => {
    if (this.textRef && (
      this.state.clientWidth !== this.textRef.clientWidth ||
      this.state.scrollWidth !== this.textRef.scrollWidth
    )) {
      this.setState({
        clientWidth: this.textRef.clientWidth,
        scrollWidth: this.textRef.scrollWidth,
        duration: (this.textRef.clientWidth + this.textRef.scrollWidth) / this.props.speed
      })
    }
  }

  constructor(props) {
    super()
    this.state = {
      clientWidth: 0,
      scrollWidth: 0,
      duration: 5
    }
  }

  componentDidMount() {
    this.handleDurationUpdate()
  }

  componentDidUpdate() {
    this.handleDurationUpdate()
  }

  render() {
    const {
      clientWidth,
      scrollWidth,
      duration
    } = this.state

    const Container = styled.div`
      overflow: hidden;
      word-break: keep-all;
      white-space: nowrap;
    `

    const ScrollText = styled.div`
      animation: ${scrollWidth > clientWidth ? `scroll ${duration}s linear infinite` : 'none'};
      animation-fill-mode: forwards;

      @keyframes scroll {
          0% {
              transform: translateX(${clientWidth}px);
          }
          100% {
              transform: translateX(-${scrollWidth}px);
          }
      }
  `

    return (
      <Container {...this.props}>
        <ScrollText ref={e => { this.textRef = e }}>
          {this.props.children}
        </ScrollText>
      </Container>
    )
  }
}
