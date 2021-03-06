import React, { memo } from 'react'
import remixicons from '~/lib/icons'

const Icon = ({ name, standalone, className, ...props }) => {
    const IconSvg = remixicons[name]
    const svgProps = {
        ...(!standalone && { 'aria-hidden': true, focusable: false }),
        ...props,
    }
    try {
        if (!IconSvg) throw new Error(`Unknown icon '${name}'`)
    } catch (err) {
        console.warn(err)
        return name
    }
    return <IconSvg className={`ri-icon ${className || ''}`} {...svgProps} />
}

export default memo(Icon)
