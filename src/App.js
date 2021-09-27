import React from 'react';
import './App.css';
import { LinkedinOutlined, GooglePlusOutlined, GithubOutlined } from '@ant-design/icons';

//<li className="txt skills"><a href="/#">Skills</a></li> '../src/img/me.png' <PostCard post={post} />

function App() {
  return (
    <div>
      <div className="App">
        <div id='mainPart' className='hidden'>
          <div className="main">
            <nav>
              <ul className="nav-menu">
                <li id="home" className="txt hm hover active"><a href="/#">Home</a></li>
                <li className="txt proj"><a href="/#">Projects</a></li>
                <li className="txt about"><a href="/#">About</a></li>
              </ul>
            </nav>
            <div id="homePage" className="homePage">
              <h1 className="txt">Cornelius Frylinck</h1>
              <img className="me" src={require('../src/img/me.png')} alt="please use a different browser"/>
            </div>
            <div id="skillsPage" className="skillsPage hidden">
              <h1 className="txt">Skills</h1>
            </div>
            <div id="projPage" className="projPage hidden">
              <h1 className="txt">Favorite 2020 Projects</h1>
              <h2 className="txt">Completed - at least for now ;)</h2>
              <p className="projItem hovertxt">
                <a href="/#" className="stxt" href="https://github.com/Cornelius27584046/python-Djarvis"><GithubOutlined /> Python Djarvis
                  <img className="hoverimg" src={require('../src/img/django.png')} alt="please use a different browser"/>
                </a><br/>

                <a href="/#">Djarvis is a small console project that is meant to be a development-orientated version of Iron Man's Jarvis program. Djarvis starts on a loop, listening until it hears the word "open". After the word has been said, the program asks what you want to do, gets the information regarding what you want to do and thereafter opens the pre-designated programs. For example, when I want to work on web development, Djarvis opens vsCode and my web browser.</a>
              </p>
              <p className="projItem hovertxt">
                <a href="/#" className="stxt" href="https://github.com/Cornelius27584046/python-Connect-4"><GithubOutlined /> Python Connect 4
                  <img className="hoverimg" src={require('../src/img/connect4.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">A connect 4 game that is written in Python3 where you play against an AI that is written using the MiniMax algorithm.</a>
              </p>
              <p className="projItem hovertxt">
                <a href="/#" className="stxt" href="https://github.com/Cornelius27584046/unity3D-Arena-Game"><GithubOutlined /> Unity 3D Arena Game
                   </a><br/>
                <a href="/#">Small but cool 3D game written by following a tutorial by AwesomeTuts.</a>
              </p>
              <p className="projItem">
                <a href="/#" className="stxt hovertxt" href="http://luxitlegalbill.co.za/"> Luxit Legal Bill
                  <img className="hoverimg" src={require('../src/img/luxit.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  A legal bill of cost generator that has a login system and allows users to create bills of cost by entering the details of each item one at a time, viewing the product in a table view and finally downloading a pdf-version of the bill. <br/>
                  Written in HTML, CSS, JS and PHP.
                </a>
              </p>
              <h2 className="txt">In Progress</h2>
              <p className="projItem">
                <a href="/#" className="stxt"> name: to be decided</a><br/>
                <a href="/#">Unity 3D Endless runner game where you play as a slime. In the beginning all you can do is dodge, but as you level up you will start learning how to attack.</a>
              </p>
              <p className="projItem">
                <a href="/#" className="stxt"> name: to be decided</a><br/>
                <a href="/#">
                  Text-based RTS game. The Earth is dying fast so your country has sent you to claim a planet in space. The only problem is that other countries had the same idee...<br/>
                  The ship can't make it back, so your only option is to fight. First you build a base, then an army. <br/>
                  Written in HTML, CSS, JSS with an Express backend that uses sockets.
                </a>
              </p>
              <br /><br /><br /><br />
            </div>
            <div id="aboutPage" className="aboutPage hidden">
              <h1 className="txt">About</h1>
              <h2>About The Website:</h2>
              <p>
                This website was written using React, CSS, JS and is hosted to IBM Cloud with a CI/CD pipeline. <br/>
                The background was made by creating a canvas and controlling it with JS. <br/> PS. Try clicking and holding your left mouse button. <br />


              </p>
              <h2>About the owner:</h2>
              <p>
                I am a coder by lifestyle.<br/>
                Before November 2019, I was using a dual-core 1.4Ghz laptop.<br/>
                This made programming in general difficult and tedious, some programs, <br/>such as Visual Studio, would often take over an hour just to start up and open a project. <br/>
                But in November 2020 I chose to get a new laptop on my contract upgrade instead of a new phone. <br/>
                My new laptop is leaps and bounds ahead of my old one, making programming an absolute joy. <br/>
                Since then I have been working on C, C++, Java, Python, Full Stack Web, C# as well as Game Development.
              </p><br/><br/><br/><br/><br/>
            </div>
            <div className='app-canvas'>
              <canvas id="ctx" style={{ top: 0, left: 0, width: '100%', height: '100%', position:'relative' }}></canvas>
            </div>
          </div>
          <footer style={{ width: '100vw', left: 0 }}>
            <div><a href="/#" className="hovertxt" href="https://www.linkedin.com/in/cornelius-frylinck-710698188"><LinkedinOutlined /> Cornelius Frylinck</a></div>
            <div><a href="/#" className="hovertxt" href="https://github.com/Cornelius27584046"><GithubOutlined /> Cornelius27584046</a></div>
            <div><GooglePlusOutlined /> cfrylinck1997@gmail.com</div>
            <div style={{ position: 'absolute', float: 'left', bottom: 0, padding: 5 + 'px'}}>&copy; Cornelius Frylinck - 2020</div>
          </footer>
        </div>
        <div id="spinnerContainer" className="shown">
          <div id="spinner"></div>
        </div>
        <br /> <br/> <br/><br/><br/>
      </div>
    </div>
  );
}

export default App;
