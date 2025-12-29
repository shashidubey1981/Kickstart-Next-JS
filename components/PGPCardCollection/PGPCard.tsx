import React from 'react'
import { Image as ImageComponent, Link } from '@/components'
import { PGPImageCardItem } from '@/types/components'
import { resolveCardCta } from '@/utils'

/**
 * PGPCard component that displays an image, title, subtitle, and call-to-action
 */
const PGPCard: React.FC<PGPImageCardItem> = (props: PGPImageCardItem) => {
    const { $, image, image_alt_text, title, subtitle, cta, id } = props

    return (
        <Link
            url={resolveCardCta(cta)}
        >
            <div
                className='aspect-[7/11] w-full relative overflow-hidden shadow-[11.17px_11.17px_25.14px_2.79px_rgba(0,0,0,0.5)] flex flex-col justify-end px-[25px] py-[30px] group'
                id={`card-${id}`}
            >

                <ImageComponent
                    image={image}
                    $={$}
                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-125'
                    image_alt_text={image_alt_text || title}
                />

                <div className='absolute inset-0 bg-black/30 z-10' />

                <div
                    className='z-10 w-[42px] h-[6px] bg-white'
                />

                {
                    title && (
                        <span
                            className='z-10 mt-[10px] text-white line-clamp-3 text-[16px] font-bold leading-[34px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
                                uppercase group-hover:decoration-2 decoration-w-[10%] underline-offset-4 transition-all duration-1000 group-hover:underline group-hover:decoration-white'
                            {...$?.title}
                            data-id='span-text'
                        >
                            {
                                title
                            }
                        </span>
                    )
                }
                {
                    subtitle && (
                        <span
                            className='z-10 mt-[10px] text-white line-clamp-3 text-[16px] leading-[34px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
                                uppercase group-hover:decoration-2 decoration-w-[10%] underline-offset-4 transition-all duration-1000 group-hover:underline group-hover:decoration-white'
                            {...$?.subtitle}
                            data-id='span-text'
                        >
                            {
                                subtitle
                            }
                        </span>
                    )
                }

            </div>
        </Link>
    )
}

export { PGPCard }