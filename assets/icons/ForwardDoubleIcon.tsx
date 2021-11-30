import React from 'react'
import { IconProps } from './interfaces'

const SVG = ({ fill = 'currentColor', width = 18, height, viewBox = '0 0 18 17' }: IconProps) => (
    <svg
        width={width}
        height={height || Math.round((width * 17) / 18)}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.483 16.45c.282 0 .528-.105.73-.299l6.838-6.688c.237-.237.36-.501.36-.809 0-.307-.123-.589-.369-.817l-6.838-6.68a.996.996 0 0 0-.72-.299c-.59 0-1.055.457-1.055 1.038 0 .28.123.553.325.755l6.152 5.995-6.152 6.011a1.037 1.037 0 0 0 .73 1.793Zm-7.857 0c.29 0 .527-.105.73-.299l6.837-6.688c.246-.237.36-.501.36-.809 0-.307-.122-.589-.36-.817l-6.838-6.68a1.016 1.016 0 0 0-.729-.299A1.03 1.03 0 0 0 .58 1.896c0 .28.114.553.316.755l6.162 5.995-6.162 6.011a1.094 1.094 0 0 0-.316.756c0 .58.457 1.037 1.046 1.037Z" />
    </svg>
)

export default SVG
