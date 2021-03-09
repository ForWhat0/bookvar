import styled from 'styled-components'

const Layout = styled.div`
width:80%;
margin-left:10%;
`

export const AppSizeLayout = ({children}) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}