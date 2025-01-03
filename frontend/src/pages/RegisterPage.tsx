
function Register(){
    return (
    <>
        <div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<h3 id="form-title">USER REGISTRATION</h3>
				</div>
				<div className="d-flex justify-content-center form_container">

					<form method="POST" action="">
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
                                <input type="text" name="first_name"/>
							</div>
						</div>
                        <div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
						</div>
                        <div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>

						</div>

						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
							</div>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							
						</div>

				   		<div className="d-flex justify-content-center mt-3 login_container">
				 			<input className="btn login_btn" type="submit" value="Register Account"/>
				   		</div>
					</form>
				</div>		
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Already have an account? <a href="{% url 'login' %}" className="ml-2">Login</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
    );
}
export default Register;