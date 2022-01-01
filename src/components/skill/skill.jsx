import "./skill.css";

const Skill = () => {
  return (
    <div className="s">
      <div className="h">
        <h4 className="h1">TOP EXPERTISE</h4>
      </div>
      <div className="g">
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Programming language:</h3>
              <p>C</p>
              <p>C++</p>
              <p>Javascript</p>
              <p>Php</p>
              <p>Python</p>
              <p>Solidity</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Web Language:</h3>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Databases:</h3>
              <p>MySQL</p>
              <p>MongoDB</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Web Framework:</h3>
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Django</p>
              <p>Bootstrap</p>
              <p>Material-ui</p>
              <p>Tailwind css</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Blokchain Framework:</h3>
              <p>Truffle</p>
              <p>Hardhat</p>
              <p>Web3.js</p>
              <p>Tronweb</p>
              <p>ethers.js</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Cloud:</h3>
              <p>AWS</p>
              <p>Google Cloud</p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h3>Other:</h3>
              <p>Git</p>
              <p>Linux</p>
              <p>Redis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
