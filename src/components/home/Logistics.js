import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import {Card} from "rebass";
import Button from 'components/Button'
const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    ${theme.mediaQueries.md} {
        flex-direction:row;
    }
`

const Center = styled.div`
    margin:auto;
`
const MentorButton = styled(Button)`
    
`

const Child = styled.div`
    flex: 1;
    height:100%;
    padding:10px;
`
export default () => (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Container>
            <Child>
                <p style = {{marginLeft:"10px"}}>Bacon ipsum dolor amet ground round corned beef venison pork chop, rump ball tip hamburger picanha alcatra pork loin flank jowl buffalo. Filet mignon kielbasa short ribs, shank pastrami pig drumstick flank beef ribs alcatra strip steak. Bacon boudin shankle, hamburger porchetta meatloaf short loin cow sausage. Meatloaf turkey pork belly brisket leberkas pancetta tail ham hock alcatra bacon tri-tip buffalo ground round. Alcatra ribeye tri-tip tongue venison chuck prosciutto strip steak spare ribs frankfurter ham hock. Chuck cupim jowl, andouille tri-tip tail shank.</p>
            </Child>
            <Child>
                <Card m='auto' sx ={{borderRadius:"10px",boxShadow:"0 0 4px rgba(0, 0, 0, .125)",height:"400px",width:"400px",overflow:"hidden"}}>
                <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=555%20Post%20St%2C%20San%20Francisco%2C%20CA%2094102&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </Card>
            </Child>
        </Container>
        <h1>What to do when you arrive:</h1>
        <ol>
            <li>
                <span>
                    Tongue landjaeger cow, kevin spare ribs biltong cupim. Short ribs tail drumstick hamburger brisket frankfurter. Swine t-bone ground round fatback rump, shank chicken ball tip jerky short ribs pancetta sausage short loin beef ribs. Kielbasa beef venison ham hock shank capicola pastrami spare ribs pancetta.
                </span>
            </li>
            <li>
                <span>
                    Tongue landjaeger cow, kevin spare ribs biltong cupim. Short ribs tail drumstick hamburger brisket frankfurter. Swine t-bone ground round fatback rump, shank chicken ball tip jerky short ribs pancetta sausage short loin beef ribs. Kielbasa beef venison ham hock shank capicola pastrami spare ribs pancetta.
                </span>
            </li>
            <li>
                <span>
                    Tongue landjaeger cow, kevin spare ribs biltong cupim. Short ribs tail drumstick hamburger brisket frankfurter. Swine t-bone ground round fatback rump, shank chicken ball tip jerky short ribs pancetta sausage short loin beef ribs. Kielbasa beef venison ham hock shank capicola pastrami spare ribs pancetta.
                </span>
            </li>
            <li>
                <span>
                    Tongue landjaeger cow, kevin spare ribs biltong cupim. Short ribs tail drumstick hamburger brisket frankfurter. Swine t-bone ground round fatback rump, shank chicken ball tip jerky short ribs pancetta sausage short loin beef ribs. Kielbasa beef venison ham hock shank capicola pastrami spare ribs pancetta.
                </span>
            </li>
        </ol>
        <Card sx={{width:"100%",overflow:'hidden',height:"200px",borderRadius:"10px",boxShadow:"0 0 4px rgba(0, 0, 0, .125)"}}>
            <img style={{width:"100%"}} src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Welchcorgipembroke.JPG"/>
        </Card>
        <h1>Schedule</h1>
        <Card mx="auto" sx={{display:"flex",width:"90%",overflow:'hidden',height:"100px",borderRadius:"10px",boxShadow:"0 0 4px rgba(0, 0, 0, .125)"}}>
            <Center>
                <h2 style={{fontStyle:"italic",fontWeight:"bolder"}}>Coming Soon!!!</h2>
            </Center>
        </Card>
        <h1>Code of Conduct</h1>
        <p>Short loin landjaeger sirloin, boudin fatback salami picanha tenderloin beef ribs tail beef flank alcatra bacon. T-bone meatloaf tail picanha ball tip pork loin frankfurter chislic. Filet mignon pig brisket fatback pastrami. Short ribs pancetta buffalo pork rump frankfurter pork loin ground round bresaola andouille capicola filet mignon meatloaf ribeye. Corned beef beef ribs buffalo capicola cow ground round bacon.</p>
        <Container style={{flexDirection:"column"}}>
            <h1>Be a Mentor!</h1>
            <p>Brisket short loin short ribs hamburger picanha ribeye. Brisket pancetta spare ribs ball tip. Bresaola sausage frankfurter beef ribs chuck pork loin kielbasa tail meatball tri-tip turducken ham hock. Cow pork belly hamburger buffalo, picanha capicola frankfurter andouille pork chop tenderloin prosciutto. Flank alcatra porchetta, ham ribeye pork belly cow pastrami chicken.</p>
            <MentorButton as="a" style={{margin:"auto"}}>
                Sign up to be a mentor!
            </MentorButton>
        </Container>
        <style jsx>{`
        p {
            font-size:1.2em;
        }
        li {
            font-size:1.3em;
            padding:10px;
        }
        h1 {
            font-weight: bolder;
            margin:20px;
        }
        `}</style>
    </div>
)
