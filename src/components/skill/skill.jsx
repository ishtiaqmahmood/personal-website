import "./skill.css";

const Skill = () => {
  return (
    <div className="s">
      <div className="h">
        <h4 className="h1">TOP EXPERTISE</h4>
      </div>
      
      <div id="skills">
        <ul>
          <li>Google Maps API</li>
          <li>JS Charts</li>
          <li>AWS (RDS/S3)</li>
          <li>Heroku</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
      <div class="card">
        <div class="container">
          <h5 className="h3">Programming Language</h5>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Postgres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
