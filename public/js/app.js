class Footer extends React.Component{
    render(){
        return  <footer>
                    <p>Created for <em>you</em> by Trenton Marks</p>
                    <a href="https://github.com/TrentonMarks">
                        <img src="css/images/github.png" alt="footer-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/trentonmarks/">
                        <img src="css/images/linkedin.png" alt="footer-icon" />
                    </a>
                </footer>
    }
}

class Contact extends React.Component{
    render(){
        return  <div class="contact" id="contact">
                    <h1>Contact</h1>
                    <p>Trenton Marks</p>
                    <p>Email: trentmarks111@gmail.com</p>
                    <p>Cell: (989) 494-3575</p>

                    <a
                        href ="#"
                        onClick={()=>{
                            this.props.changeState('showingResume', 'showingHome')
                        }}
                        >Resume
                    </a>
                </div>
    }
}

class ReactRecords extends React.Component{
    render(){
        return  <div>

                    <div class="project-names-container">

                        <div class="project-name">
                            <h3>Battleship Galactica</h3>
                        </div>

                        <div class="project-name">
                            <h3>Left.Right.</h3>
                        </div>

                        <div class="project-name">
                            <h3>Drinkr</h3>
                        </div>

                        <div class="project-name">
                            <h3>Chop Chop</h3>
                        </div>

                    </div>

                    <div class="secondary-display-container">

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingBG', 'showingRR')
                            }}
                        >
                            <img src="/css/images/battleship-galactica.png" alt="Battleship Galactica" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingLR', 'showingRR')
                            }}
                        >
                            <img src="/css/images/left-right.png" alt="Left.Right." />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingDr', 'showingRR')
                            }}
                        >
                            <img src="/css/images/drinkr.png" alt="Drink'r" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingCC', 'showingRR')
                            }}
                        >
                            <img src="/css/images/chop-chop.png" alt="Chop Chop" />
                        </div>

                    </div>

                    <div class="show-container">
                        <div class="selected-display">
                            <img src="/css/images/react-records.png" alt="React Records" />
                            <img src="/css/images/github.png" alt="github icon" />
                        </div>
                        <div class="show">
                            <div class="show-info">
                                <h4>Description</h4>
                                <p>A collaborative (3-person team) project built as an online record store mockup website. Users can add new records, delete or edit/update records, find a list of all records at the home page, or click on any record to view its SHOW page. </p>
                                <p>A full-stack Rails/React application that has one model with full CRUD. My personal role was to create the front-end using React. </p>
                                <h4>Technologies Used</h4>
                                <div class="tech">
                                    <div class="tech-container-one">
                                        <p>Ruby on Rails</p>
                                        <p>ReactJS</p>
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div class="tech-container-two">
                                        <p>CSS</p>
                                        <p>Bulma</p>
                                        <p>HTML</p>
                                    </div>
                                    <div class="tech-container-three">
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    }
}

class Drinkr extends React.Component{
    render(){
        return  <div>

                    <div class="project-names-container">

                        <div class="project-name">
                            <h3>Battleship Galactica</h3>
                        </div>

                        <div class="project-name">
                            <h3>Left.Right.</h3>
                        </div>

                        <div class="project-name">
                            <h3>React Records</h3>
                        </div>

                        <div class="project-name">
                            <h3>Chop Chop</h3>
                        </div>

                    </div>

                    <div class="secondary-display-container">

                        <div
                        class="secondary-display"
                        onClick={()=>{
                            this.props.changeState('showingBG', 'showingDr')
                        }}
                        >
                            <img src="/css/images/battleship-galactica.png" alt="Battleship Galactica" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingLR', 'showingDr')
                            }}
                        >
                            <img src="/css/images/left-right.png" alt="Left.Right." />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingRR', 'showingDr')
                            }}
                        >
                            <img src="/css/images/react-records.png" alt="React Records" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingCC', 'showingDr')
                            }}
                        >
                            <img src="/css/images/chop-chop.png" alt="Chop Chop" />
                        </div>

                    </div>

                    <div class="show-container">
                        <div class="selected-display">
                            <img src="/css/images/drinkr.png" alt="Drinkr" />
                            <img src="/css/images/github.png" alt="github icon" />
                        </div>
                        <div class="show">
                            <div class="show-info">
                                <h4>Description</h4>
                                <p>A collaborative (two-man team) project for users to make their own personal cocktail recipe handbook. Users can view a random drink recipe, search specific drinks by name or ingredient, or even create their own recipe and save it to their homepage for future reference.</p>
                                <p>A full-stack MEAN application adhering to the MVC file structure ("Views" directory is "Public" directory with Angular). A single model is used that has full CRUD and fetches from a third-party API on the client-side with AJAX.</p>

                                <h4>Technologies Used</h4>
                                <div class="tech">
                                    <div class="tech-container-one">
                                        <p>Mongoose</p>
                                        <p>Express</p>
                                        <p>AngularJS</p>
                                    </div>
                                    <div class="tech-container-two">
                                        <p>Node.js</p>
                                        <p>JavaScript</p>
                                        <p>HTML</p>
                                    </div>
                                    <div class="tech-container-three">
                                        <p>Normalize/Skeleton</p>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    }
}

class LeftRight extends React.Component{
    render(){
        return  <div>

                    <div class="project-names-container">

                        <div class="project-name">
                            <h3>Battleship Galactica</h3>
                        </div>

                        <div class="project-name">
                            <h3>Drinkr</h3>
                        </div>

                        <div class="project-name">
                            <h3>React Records</h3>
                        </div>

                        <div class="project-name">
                            <h3>Chop Chop</h3>
                        </div>

                    </div>

                    <div class="secondary-display-container">

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingBG', 'showingLR')
                            }}
                        >
                            <img src="/css/images/battleship-galactica.png" alt="Battleship Galactica" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingDr', 'showingLR')
                            }}
                        >
                            <img src="/css/images/drinkr.png" alt="Drink'r" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingRR', 'showingLR')
                            }}
                        >
                            <img src="/css/images/react-records.png" alt="React Records" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingCC', 'showingLR')
                            }}
                        >
                            <img src="/css/images/chop-chop.png" alt="Chop Chop" />
                        </div>

                    </div>

                    <div class="show-container">
                        <div class="selected-display">
                            <img src="/css/images/left-right.png" alt="Left.Right." />
                            <img src="/css/images/github.png" alt="github icon" />
                        </div>
                        <div class="show">
                            <div class="show-info">
                                <h4>Description</h4>
                                <p>A website for users to view and post gifs in order to leave users oddly satisfied; or to be "left right".</p>
                                <p>An MVC file structure is followed with a single model that contains all 7 RESTful routes and full CRUD.</p>
                                <h4>Technologies Used</h4>
                                <div class="tech">
                                    <div class="tech-container-one">
                                        <p>Mongoose</p>
                                        <p>Express + EJS</p>
                                        <p>Node.js</p>
                                    </div>
                                    <div class="tech-container-two">
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    }
}

class BattleshipGalactica extends React.Component{
    render(){
        return  <div>

                    <div class="project-names-container">

                        <div class="project-name">
                            <h3>Left.Right.</h3>
                        </div>

                        <div class="project-name">
                            <h3>Drinkr</h3>
                        </div>

                        <div class="project-name">
                            <h3>React Records</h3>
                        </div>

                        <div class="project-name">
                            <h3>Chop Chop</h3>
                        </div>

                    </div>

                    <div class="secondary-display-container">

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingLR', 'showingBG')
                            }}
                        >
                            <img src="/css/images/left-right.png" alt="Left.Right." />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingDr', 'showingBG')
                            }}
                        >
                            <img src="/css/images/drinkr.png" alt="Drink'r" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingRR', 'showingBG')
                            }}
                        >
                            <img src="/css/images/react-records.png" alt="React Records" />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingCC', 'showingBG')
                            }}
                        >
                            <img src="/css/images/chop-chop.png" alt="Chop Chop" />
                        </div>

                    </div>

                    <div class="show-container">
                        <div class="selected-display">
                            <img src="/css/images/battleship-galactica.png" alt="Battleship Galactica" />
                            <img src="/css/images/github.png" alt="github icon" />
                        </div>
                        <div class="show">
                            <div class="show-info">
                                <h4>Description</h4>
                                <p>A 2-player game of Battleship (User vs. AI) with continuous play until a winning or losing outcome is reached.</p>
                                <p>This front-end only project has been developed to demonstrate the capability of coding complex JavaScript logic using the jQuery library.</p>
                                <h4>Technologies Used</h4>
                                <div>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>jQuery</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    }
}

class ChopChop extends React.Component{
    render(){
        return  <div>
                    <div class="project-names-container">

                        <div class="project-name">
                            <h3>Battleship Galactica</h3>
                        </div>

                        <div class="project-name">
                            <h3>Left.Right.</h3>
                        </div>

                        <div class="project-name">
                            <h3>Drinkr</h3>
                        </div>

                        <div class="project-name">
                            <h3>React Records</h3>
                        </div>

                    </div>
                    <div class="secondary-display-container">
                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingBG', 'showingCC')
                            }}
                        >
                            <img src="/css/images/battleship-galactica.png" alt="Battleship Galactica" />
                        </div>
                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingLR', 'showingCC')
                            }}
                        >
                            <img src="/css/images/left-right.png" alt="Left.Right." />
                        </div>

                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingDr', 'showingCC')
                            }}
                        >
                            <img src="/css/images/drinkr.png" alt="Drink'r" />
                        </div>
                        <div
                            class="secondary-display"
                            onClick={()=>{
                                this.props.changeState('showingRR', 'showingCC')
                            }}
                        >
                            <img src="/css/images/react-records.png" alt="React Records" />
                        </div>
                    </div>
                    <div class="show-container">
                        <div class="selected-display">
                            <img src="/css/images/chop-chop.png" alt="Chop Chop" />
                            <img src="/css/images/github.png" alt="github icon" />
                        </div>
                        <div class="show">
                            <div class="show-info">
                                <h4>Description</h4>
                                <p>An individual project built for an imaginary delivery service to be able to collect and display relevant data quickly and accurately.</p>
                                <p>A full-stack Rails/React application that has 7 models, makes complex SQL queries with Rails, and passes queried data through different methods in order to output data to display that is NOT directly held within the database. TailwindCSS, a utility first framework, was used to create a clean, responsive design.</p>
                                <h4>Technologies Used</h4>
                                <div class="tech">
                                    <div class="tech-container-one">
                                        <p>Ruby on Rails</p>
                                        <p>ReactJS</p>
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div class="tech-container-two">
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>TailwindCSS</p>
                                    </div>
                                    <div class="tech-container-three">
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

class Projects extends React.Component{
    constructor(props){
        super(props)
        this.changeState = this.changeState.bind(this)
        this.state = {
            showingCC: true,
            showingBG: false,
            showingLR: false,
            showingDr: false,
            showingRR: false
        }
    }
    changeState(st1, st2, st3, st4, st5){
        this.setState({
            [st1]: true,
            [st2]: false,
            [st3]: false,
            [st4]: false,
            [st5]: false
        })
    }
    render(){
        return  <div class="projects" id="projects">
                    <h1>Projects</h1>
                    <p>Check out my five largest, most recent projects that demonstrate the range of technologies I have learned. Read the descriptions below for a brief overview, click on the GitHub icon to view the code and read.me file, and click on the link icon to open the project in a new tab!</p>

                    {this.state.showingCC ?
                        <ChopChop
                            changeState={this.changeState}
                        />
                        : ''
                    }

                    {this.state.showingBG ?
                        <BattleshipGalactica
                            changeState={this.changeState}
                        />
                        : ''
                    }

                    {this.state.showingLR ?
                        <LeftRight
                            changeState={this.changeState}
                        />
                        : ''
                    }

                    {this.state.showingDr ?
                        <Drinkr
                            changeState={this.changeState}
                        />
                        : ''
                    }

                    {this.state.showingRR ?
                        <ReactRecords
                            changeState={this.changeState}
                        />
                        : ''
                    }

                </div>
    }
}

class About extends React.Component{
    render(){
        return  <div class="about" id="about">
                    <h1>About</h1>
                    <p>Welcome</p>
                    <p>I am a full-stack web developer with a heavy entrepreneurial mindset. I am intrigued at the essential role that software plays in the success and growth of each industry. Since I have first trained to understand basic business principles and the concepts behind driving consumers, I have a uniquely creative approach in the way that I develop software. I am self-sufficient and strive to gain a clear understanding of the ultimate end-game of each company that I help in its advancement.</p>
                </div>
    }
}

class Nav extends React.Component{
    render(){
        return  <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a
                        href ="#"
                        onClick={()=>{
                            this.props.changeState('showingResume', 'showingHome')
                        }}
                        >Resume
                    </a>
                    <a href="#contact">Contact</a>
                </nav>
    }
}

class Header extends React.Component{
    render(){
        return  <header>
                    <h1 class="header-name">Trenton Marks</h1>
                    <p>A Full Stack Developer based in Denver, Colorado</p>
                </header>
    }
}

class Resume extends React.Component{
    render(){
        return  <div class="resume-container">

                    <div class="header-info">
                        <h1>Trenton Marks</h1>
                        <h3>Full Stack Web Developer</h3>
                        <h5>Denver, CO</h5>
                        <h5>(989) 494-3575</h5>
                        <h5>trentmarks111@gmail.com</h5>
                    </div>

                    <div class="profile">
                        <h2 class="resume-h2">Profile</h2>
                        <p>I am a full-stack web developer with a heavy entrepreneurial mindset. As I have gained more and more work experience, I have become intrigued at the essential role that software plays in the success and growth of each industry. Since I have first trained to understand basic business principles and the concepts behind driving consumers, I have a uniquely creative approach in the way that I develop software. I am a self sufficient individual that has a clear understanding of the ultimate end-game of each company that I help in its advancement.</p>
                    </div>

                    <div class="skills">
                        <h2 class="resume-h2">Skills</h2>
                        <ul>
                            <li>Ajax</li>
                            <li>AngularJS</li>
                            <li>Bootstrap</li>
                            <li>CSS</li>
                            <li>Express.js</li>
                            <li>GitHub</li>
                            <li>Heroku</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                            <li>Node.js</li>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>Sass</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div class="experience">
                        <h2 class="resume-h2">Experience</h2>
                        <div class="web-development">
                            <h3>Web Development Fellow</h3>
                            <h4>General Assembly | Feb 2018 - Present</h4>
                            <p>I participated in a full-time immersive web development course, completing in-class projects and personal projects focused on real-world application of web development principles, tools, and best practices. I also developed a portfolio of individually and collaboratively focused projects.</p>
                        </div>

                        <div class="Wireless-zone">
                            <h3>Sales Professional</h3>
                            <h4>Wireless Zone Premium Retailer | Dec 2015 - Jul 2018</h4>
                            <p>This positionhas allowed me to develop sales skills such as connecting, developing report, and closing. It has also allowed me to grow my abilities in sales calls, follow ups, appointment setting, and other customer relationship management. This job is strictly performance based which is what draws me to this job the most.</p>
                        </div>
                    </div>

                    <div class="education">
                        <h2 class="resume-h2">Education</h2>
                        <h4>University of Michigan - Flint, MI | 2013 - 2015</h4>
                    </div>

                    <button
                        onClick={()=>{
                            this.props.changeState('showingHome', 'showingResume')
                        }}>Back
                    </button>

                </div>
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.changeState = this.changeState.bind(this)
        this.state = {
            showingHome: true,
            showingResume: false
        }
    }
    changeState(st1, st2){
        this.setState({
            [st1]: true,
            [st2]: false
        })
    }
    render(){
        return  <div class='container'>
                    {this.state.showingHome ?

                        <div>
                            <Header />

                            <Nav
                                changeState={this.changeState}
                            />

                            <About />

                            <Projects />

                            <Contact
                                changeState={this.changeState}
                            />

                            <Footer />

                        </div>
                        : ''
                    }

                    {this.state.showingResume ?
                        <Resume
                            changeState={this.changeState}
                        />
                        : ''
                    }
                </div>
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('body')
)
