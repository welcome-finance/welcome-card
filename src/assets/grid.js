import React, { FunctionComponent, ReactElement } from 'react'

const style = {
    height: 105,
    width: 105,
    radius: 15,
    color: "#fbb64c",
    ariaLabel: 'grid-loading',
    wrapperStyle: {},
    wrapperClass: "",
    visible: true,
    display: 'flex'
}

export const Grid = ({
    height = 80,
    width = 80,
    radius = 15,
    color = "#fbb64c",
    ariaLabel = 'grid-loading',
    wrapperStyle,
    wrapperClass,
    visible = true,
    display = 'flex'
}) => (
    <div
        style={{ display, ...wrapperStyle, height: 125, width: 125 }}
        className={wrapperClass}
        data-testid="grid-loading"
        aria-label={ariaLabel}
    >
        <svg
            width={80}
            height={85}
            viewBox="0 0 105 125"
            y="-100"
            fill={color}
            data-testid="grid-svg"
        >
            <g x={100}>
                <circle cx="12.5" cy="12.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="0s"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="12.5" cy="52.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="100ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="52.5" cy="12.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="300ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="52.5" cy="52.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="600ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="92.5" cy="12.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="800ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="92.5" cy="52.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="400ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="12.5" cy="92.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="700ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="52.5" cy="92.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="500ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="92.5" cy="92.5" r={`${radius}`}>
                    <animate
                        attributeName="fill-opacity"
                        begin="200ms"
                        dur="1s"
                        values="1;.2;1"
                        calcMode="linear"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    </div>
)

export default Grid