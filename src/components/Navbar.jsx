import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const Container = styled.div`
    height:60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding : 5px;
`
const Input = styled.input`

`

const Center = styled.div`
    flex:1;
`
const Right = styled.div`
    flex:1;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input/> 
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
