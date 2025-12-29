import React from 'react'

import { PGPCardCollection as PGPCardCollectionProps } from '@/types/components'
import { PGPCardCollectionBody } from './PGPCardCollectionBody'

/**
 * React component that renders a collection of cards
 * @param {PGPCardCollectionProps} props - Component props
 * @param {Array<PGPImageCardItem>} props.cards - Array of card objects
 * @param {number} props.count - Total number of cards
 * @param {string} props.id - Unique identifier for the card collection
 * @param {Object} props.$ - Optional object containing data-cslp attributes
 * @param {string} props.className - Optoinal string containing additional class for styling
 * @returns {JSX.Element} Collection of cards or card tiles
 */
const PGPCardCollection: React.FC<PGPCardCollectionProps> = (props: PGPCardCollectionProps): JSX.Element => {
    const { cards, count, id, className, $  } = props

    if ((!cards || cards.length === 0)) {
        return <></>
    }

    return (

        <div
            id={id}
            className={`${className} my-25`}
        >
            <div className='mx-auto'>

                <PGPCardCollectionBody
                    id={id}
                    cards={cards}
                    count={count ? count : (cards ? cards?.length : 0)}
                    $={$}
                />
            </div>
        </div>

    )
}

export { PGPCardCollection }