import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

    

    const {data:imgs, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='ard animate__animated animate__flash'>Loading</p>}
            
            <div className='card-grid'>

                {imgs.map(img =>
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                )}

            </div>
        </>
    )
}

GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}
