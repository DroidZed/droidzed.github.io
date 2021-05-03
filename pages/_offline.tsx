import React from 'react'
import HeadTag from '../components/HeadTag'
import TopContainer from '../components/TopContainer'

export default function _offline() {
    return (
        <TopContainer>
            <HeadTag title="Offline"/>
            Oh oh...looks like you're offline !
            <br/>
            Check Later when you've got internet back !
        </TopContainer>
    )
}
