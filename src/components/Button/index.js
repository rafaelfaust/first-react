import React from 'react'

import { Button as Buttons} from './styles'

function Button({children, ...props}) {
    

    return <Buttons { ...props}>{children}</Buttons>
}

export default Button