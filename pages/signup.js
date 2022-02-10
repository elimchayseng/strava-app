import React, { Component } from "react";
import ConnectWithStravaButton from "./ConnectWithStravaButton";
import { useSession, signIn, signOut } from "next-auth/react"



//what's all dis den?

class Signup extends Component {
  render() {
    return (
      <div>
      Click to sign into your user account <br />
      <button onClick={() => signIn("strava")}>Sign in</button>
     </div>
    /*  <div>
        <ConnectWithStravaButton pathname={this.props.pathname} />        
      </div> */
    );
  }
}

export default Signup;
