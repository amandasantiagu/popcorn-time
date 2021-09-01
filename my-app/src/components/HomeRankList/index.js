import React from 'react'
import { RowStyleRank } from './HomeRankListStyles'
import poster1 from '../../assets/images/poster1.jpg'

const HomeRankList = () => {

    return (
        <>
            <div>

                <RowStyleRank>
                    <p>1.</p>
                    <img src={poster1} />
                    <p>2.</p>
                    <img src={poster1} />
                </RowStyleRank>
                <RowStyleRank>
                    <p>3.</p>
                    <img src={poster1} />
                    <p>4.</p>
                    <img src={poster1} />
                </RowStyleRank>
                <RowStyleRank>
                    <p>5.</p>
                    <img src={poster1} />
                    <p>6.</p>
                    <img src={poster1} />
                </RowStyleRank>

            </div>
        </>
    )
}

export default HomeRankList