import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <div className="app_left">
          <div className="app_header">
            <h1 className="app_mainHeader">DOOF</h1>
          </div>

          <div className="app_middle">
            <h2 className="app_middleLogin">Login</h2>
            <div className="app_email">
              <h4 className="app_loginDetails">Email</h4>
              <input type="email" placeholder="email" />
            </div>

            <div className="app_password">
              <h4 className="app_loginDetails">Password</h4>
              <input type="password" placeholder="password" />
            </div>
          </div>

          <div className="app_button">
            <Button className="app_loginButton" type="submit">
              Login
            </Button>
            <h4>
              dont have an account yet??
              <span className="app_span">Sign Up</span>
            </h4>
          </div>

          <div className="app_bottom">
            <h4>terms of service</h4>
            <h4>privacy policy</h4>
          </div>
        </div>
        <div id="circle"></div>
        <div className="app_right">
          <h2 className="app_test">test</h2>
          <h2 className="app_rightMiddle">unlock your stuck revenue.</h2>

          <p className="app_content">
            We help you unlock the true potential connect with your customers to{" "}
            <br />
            understand the rights and wrongs with your product.
          </p>

          <img
          className="app_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpiVYNFx6HGlzXkLM-9kORAIhRaso7-UvdgQj7SMfCf9s6T1JoVzDdwat79h825AiRLs&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
