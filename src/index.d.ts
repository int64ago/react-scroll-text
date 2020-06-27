import React from 'react'

export interface ScrollTextProps {
    speed?: number,
    children: string
}

declare const ScrollText: React.Component<ScrollTextProps>

export default ScrollText