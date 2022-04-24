import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../Images/following-free-icon-font.png'
import exit from '../Images/angle-square-right-free-icon-font.png'
import "./styles.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { logout } from "../Pages/firebase";
import { useAuth} from "../Pages/useAuth";


import PlayerActivity from '../Pages/PlayerActivity';
import Statistics from '../Pages/Statistics';
import PlayerInfo from '../Pages/PlayerInfo';
import TopPlayers from '../Pages/TopPlayers';
import PlayerBestAndWorstGames from '../Pages/PlayerBestAndWorstGames';






export default function Header() {

    const userName = useAuth().userName;


    function logoutt(e) {
        e.preventDefault()
        logout().then((res) => {
            console.log('Sign Out');
            window.location.reload();
          })
          .catch((e) => {
            console.log(e.message)
        })
    }

        return(
        <>
            <Navbar collapseOnSelect expand="md" className="color-nav" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Top Players</Nav.Link>
                            <Nav.Link href="/statistics">Statistics</Nav.Link>
                            <Nav.Link href="/activity">Player activity</Nav.Link>
                            <Nav.Link href="/top-games">Player best and worst games</Nav.Link>
                            <Nav.Link href="/info">Player info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand>
                        <img
                            src = {logo}
                            height ="30"
                            width = "30"
                            className="d-inline-block align-top"
                            alt="Logo" 
                        />
                    </Navbar.Brand>
                    <Navbar.Text>
                        <h3>&nbsp; {userName}  &nbsp;</h3>
                    </Navbar.Text>
                    <Navbar.Brand>
                        <img
                            src = {exit}
                            height ="30"
                            width = "30"
                            className="d-inline-block align-top"
                            alt="Logo"
                            onClick={logoutt} 
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route exact path="/statistics" element={<Statistics/>} />
                    <Route exact path="/" element={<TopPlayers/>} />
                    <Route exact path="/activity" element={<PlayerActivity/>} />
                    <Route exact path="/top-games" element={<PlayerBestAndWorstGames/>} />
                    <Route exact path="/info" element={<PlayerInfo/>} />
                </Routes>
            </Router>
        </>
        )
}