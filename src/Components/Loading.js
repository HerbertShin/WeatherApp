import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Loading.css';

export default function Loading(){
    return (
        <div className="fetching-div">
          <Skeleton 
          className="skeleton-one"
          height={30}
          width={200}/>
          <Skeleton
          className="skeleton-two"
          height={20}
          width={300}
          />
          <Skeleton
          className="skeleton-three"
          height={200}
          width={300}
          />
          <Skeleton
          className="skeleton-four"
          height={60}
          width={400}
          />
          <Skeleton
          className="skeleton-five"
          height={40}
          width={300}
          />
        </div>
        )
}