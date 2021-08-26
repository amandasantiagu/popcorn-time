import React from 'react'
import LoadingIMG from '../../assets/images/loading-page.svg';

import {WrapperLoading} from './LoadingStyles ';
function Loading() {
  return (
    <WrapperLoading>
      <img src={LoadingIMG} alt="Loading Page" />
    </WrapperLoading>
  )
}

export default Loading
