// Thumbnail.tsx
import React from 'react'
import { types, Text } from 'react-bricks/frontend'

const Hello: types.Brick = () => {
    return (
        <>
            <div className='grid md:flex justify-center bg-[#101827]'>
                <Text
                    renderBlock={(props) => (
                        <p className='text-2xl text-cente font-black text-gray-900 dark:text-white leading-tight mb-3 md:text-4xl'>
                            {props.children}
                        </p>
                    )}
                    placeholder='custom text...'
                    propName='title'
                />
            </div>
        </>
    )
}

Hello.schema = {
    name: 'hello',
    label: 'hello',
    sideEditProps: [],
}

export default Hello
