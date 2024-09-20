import { portfolios } from '@/consts/const'
import React from 'react'
import PortfolioCard from '../card/PortfolioCard'

function Portfolio() {
    return (
        <section className='mxWidthHome mx-auto container py-[120px]'>
            <div className='flex flex-wrap gap-5 justify-between'>
                {portfolios.map((portfolio, index) => (
                    <PortfolioCard
                        key={index}
                        title={portfolio.title}
                        description={portfolio.description}
                        imgSrc={portfolio.image}
                        imgAlt={portfolio.title}
                        category={portfolio.category}
                        link={'/portfolio/' + portfolio.title}
                    />
                ))
                }
            </div>
        </section>
    )
}

export default Portfolio