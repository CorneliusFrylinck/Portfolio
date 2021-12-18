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
              <h1 className="txt">Favorite 2021 Projects</h1>
              <h2 className="txt">Completed - at least for now ;)</h2>
              <p className="projItem hovertxt">
                <a className="stxt" href="https://github.com/Cornelius27584046/python-Djarvis"><GithubOutlined /> Python Djarvis
                  <img className="hoverimg" src={require('../src/img/django.png')} alt="please use a different browser"/>
                </a><br/>

                <a href="/#">Djarvis is a small console project that is meant to be a development-orientated version of Iron Man's Jarvis program. Djarvis starts on a loop, listening until it hears the word "open". After the word has been said, the program asks what you want to do, gets the information regarding what you want to do and thereafter opens the pre-designated programs. For example, when I want to work on web development, Djarvis opens vsCode and my web browser.</a>
              </p>
              <p className="projItem hovertxt">
                <a className="stxt" href="https://github.com/Cornelius27584046/python-Connect-4"><GithubOutlined /> Python Connect 4
                  <img className="hoverimg" src={require('../src/img/connect4.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">A connect 4 game that is written in Python3 where you play against an AI that is written using the MiniMax algorithm.</a>
              </p>
              <p className="projItem">
                <a className="stxt hovertxt" href="http://luxitlegalbill.co.za/"> Luxit Legal Bill
                  <img className="hoverimg" src={require('../src/img/luxit.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  A legal bill of cost generator that has a login system and allows users to create bills of cost by entering the details of each item one at a time, viewing the product in a table view and finally downloading a pdf-version of the bill. <br/>
                  Written in HTML, CSS, JS and PHP.
                </a>
              </p>
              <p className="projItem">
                <a className="stxt hovertxt" href="/#"> Scrapping Dashboard
                  <img className="hoverimg" src={require('../src/img/scrapping.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  A custom dashboard created on SYSPRO to ease and improve the client's item scrapping process.
                </a>
              </p>
              <p className="projItem">
                <a className="stxt hovertxt" href="/#"> Multiple File Checker
                  <img className="hoverimg" src={require('../src/img/multiCheck.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  A utility program used to search a specified value through multiple files of specified file types.
                </a>
              </p>
              <h2 className="txt">In Progress</h2>
              <p className="projItem">
                <a className="stxt hovertxt" href="/#"> Save The Date
                  <img className="hoverimg" src={require('../src/img/saveTheDate.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  An ASP.NET Core website where wedding details can be added and a link can be sent to guests to simplify RSVP and information-sharing aspects of a wedding.
                </a>
              </p>
              <p className="projItem">
                <a className="stxt hovertxt" href="/#"> Scanner App
                  <img className="hoverimg" src={require('../src/img/scannerApp.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  A Xamarin app that can be used to simplify inventory management by scanning barcodes and posting the data via Business Objects to SYSPRO through a .NET Core web API hosted on IIS.
                </a>
              </p>
              <p className="projItem">
                <a href="/#" className="stxt"> Trouble in Paradise</a><br/>
                <a href="/#">
                  Text-based RTS game. The Earth is dying fast so your country has sent you to claim a planet in space. The only problem is that other countries had the same idee...<br/>
                  The ship can't make it back, so your only option is to fight. First you build a base, then an army. <br/>
                  Written in HTML, CSS, JSS with an Express backend that uses sockets, remake in progress with ASP.NET Core.
                </a>
              </p>
              <p className="projItem">
                <a className="stxt hovertxt" href="/#"> Veg Intake
                  <img className="hoverimg" src={require('../src/img/vegIntake.png')} alt="please use a different browser"/>
                </a><br/>
                <a href="/#">
                  An existing system written by a different developer at iPlan is used by a client to manage their fruit procurement.<br/>
                  The client decided they wanted a few changes on the current system to be able to use it for their <img className="hoverimg" src={require('../src/img/vegIntake1.png')} alt="please use a different browser">fruit procurement</img>.
                </a>
              </p>
              <br /><br /><br /><br />
            </div>
            <div id="aboutPage" className="aboutPage hidden">
              <h1 className="txt">About</h1>
              <h2>About The Website:</h2>
              <p>
                This website was written using React, CSS, JS. <br/>
                First hosted to IBM Cloud with a CI/CD pipeline -<br/>thereafter moved to Netlifyagain with a CI/CD pipline that re-publishes the site as soon as changes are sent to GitHub after the IBM Cloud trial expired. <br/>
                The background was made by creating a canvas and controlling it with JS. <br/> PS. Try clicking and holding your left mouse button. <br />


              </p>
              <h2>About the owner:</h2>
              <p>
                Developer by Profession. Coder by lifestyle.<br/>
                Born on 8 September 1997<br/>
                Married since 20 September 2021<br/>
                Full Stack .NET Developer / SYSPRO Analyst at iPlan Global since 30 November 2020 (Why start last day of the month? Because it was a Monday and made more sense than starting on a Tuesday)<br/><br/>
                <h3>Favorite languages by function:</h3><br/>
                - Web: ASP.NET Core MVC - with a lot of JavaScript mixed in to make up for the lack of flexibility of model-driven approaches <br/>
                - Desktop: C# - because of the power Visual Studio brings <br/>
                - Mobile: between Xamarin and Cordova - Xamarin is easy to use, manage and build, but when client-server communication is required, it needs to be done seperately with an API <br/>
                - Source Control: Azure Devops and GitHub
                <br/><br/>
                    <h3>Hobbies:</h3><br/>
                    <span>- Watching anime</span><br/>
                    <span>- Gaming (currently Valheim)</span><br/>
                    <span>- Exercise (almost anything except running or anything with stairs)</span><br/>
                    <span>- Anything interesting (most recently shooting and archery)</span><br/>
                    <span>- Learning something new (usually coding- or language related)</span>
                <br/><br/>
                Experience working with C, C++, Java, Python, Full Stack Web (Vanilla languages with Express.js backend as well as ASP.NET Core), C# as well as Game Development with Unity.
              </p>
              <br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/>
            </div>
            <div className='app-canvas'>
              <canvas id="ctx" style={{ top: 0, left: 0, width: '100%', height: '100%', position:'relative' }}></canvas>
            </div>
          </div>
          <footer style={{ width: '100vw', left: 0 }}>
            <div><a className="hovertxt" href="https://www.linkedin.com/in/cornelius-frylinck-710698188"><LinkedinOutlined /> Cornelius Frylinck</a></div>
            <div><a className="hovertxt" href="https://github.com/CorneliusFrylinck"><GithubOutlined /> Github</a></div>
            <div><a className="hovertxt"  href="corneliusfrylinck@zohomail.com"><GooglePlusOutlined /> Email</a></div>
            <div style={{ position: 'absolute', float: 'left', bottom: 0, padding: 5 + 'px'}}>&copy; Cornelius Frylinck - 2021</div>
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
