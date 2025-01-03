
import '../assets/login.css';

function LoginPage(){
    
    return (
        <div className="form-wrapper">
        <h2>Sign In</h2>
            <div className="form-control">
                <input name="username" type="text" required/>
                <label>Username</label>
            </div>
            <div className="form-control">
                <input name="password" type="password" required/>
                <label>Password</label>
            </div>
            <button type="submit">Sign In</button>
            <div className="form-help"> 
                <div className="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="/register">Register now</a>
            </div>
    </div>
    );
}

export default LoginPage;