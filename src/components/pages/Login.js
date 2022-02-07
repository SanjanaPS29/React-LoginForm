import React from "react";
import { Flex } from "../styles/Flex.style";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
function Login() {
  return (
     <Flex>
       <LoginLeft/>
       <LoginRight/>
     </Flex>
  );
}

export default Login;










/*
<>
    
<LoginStyle>

<FormArea>
 <LoginForm>
     <PageHeading>
     <LogIn>Log In</LogIn>
     <p>A mollis morbi est lorem id lorem venenatis sed. Elit quam nisi, nulla macenas rhoncus, fusce sed velit. Congue aliquet quam .</p>
     </PageHeading>

   <MainForm>
       <Frame>
    <FormStyle>
    <input type="text" name="username" placeholder="username"/>
    </FormStyle>
    <br/>
    <FormStyle>
    <input type="text" name="username" placeholder="password"/>
    </FormStyle>

    {/* <LoginButton>Login</LoginButton> }

    </Frame>
</MainForm>

</LoginForm>
</FormArea>

<Background/>
</LoginStyle>
</>

*/