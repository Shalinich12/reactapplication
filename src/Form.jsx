function FirstNameHandling(event) {
    const first_name = event.target.value;
    const pattern = /^[A-Za-z]{3,}$/;
    if (first_name === "")
        return;
    if (pattern.test(first_name)) {
        alert("Valid First Name");
    } else {
        alert("Invalid First Name");
    }

}

function LastNameHandling(event) {
    const last_name = event.target.value;
    const pattern = /^[A-Za-z]{3,}$/;
    if (last_name === "") return;
    if (pattern.test(last_name)) {
        alert("Valid Last Name");
    } else {
        alert("Invalid Last Name");
    }
}

function EmailHandling(event) {
    const email = event.target.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if (email === "") return;
    if (pattern.test(email)) {
        alert("Valid Email");
    } else {
        alert("Invalid Email");
    }
}

function PhoneNumberHandling(event) {
    const phone = event.target.value;
    const pattern = /^[6-9]\d{9}$/;
    if (phone === "") return;
    if (pattern.test(phone)) {
        alert("Valid Phone Number");
    } else {
        alert("Invalid Phone Number");
    }
}

function handledob(event) {
    const dob = event.target.value;
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (dob === "") return;
    if (pattern.test(dob)) {
        alert("Valid Date of Birth");
    } else {
        alert("Invalid Date of Birth");
    }
}

function PasswordHandling(event) {
    const password = event.target.value;
    const pattern = /^[A-Z][a-z]{3,5}[0-9]{1,3}[@_$]$/;
    if (password === "") return;
    if (pattern.test(password)) {
        alert("Valid Password");
    } else {
        alert("Invalid Password");
    }
}

function handlesubmit(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
}

function RegisterForm() {
    return (
        <form className="Register" action="#" onSubmit={handlesubmit}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                }
            }}
        >
            <h1>Register Form</h1>
            <input type="text" id="firstName" name="first_name" placeholder="Enter First Name" onBlur={FirstNameHandling} />
            <input type="text" id="lastName" name="last_name" placeholder="Enter Last Name" onBlur={LastNameHandling} />
            <input type="email" placeholder="Enter Email" onBlur={EmailHandling} />
            <input type="tel" placeholder="Enter Phone Number" onBlur={PhoneNumberHandling} />
            <input type="date" name="dob" placeholder="Date of Birth" onBlur={handledob} />
            <div className="radiobuttons">
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other">Other</label>
            </div>
            <button type="submit">Register</button>
            <LoginForm />
        </form>
    );
}

function LoginForm() {
    return (
        <form className="login" action="#" onSubmit={handlesubmit}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                }
            }}>
            <h1>Login Form</h1>
            <input type="email" placeholder="Enter Email" onBlur={EmailHandling} />
            <input type="password" placeholder="Enter Password" onBlur={PasswordHandling} />
            <button type="submit">Login</button>
        </form>
    );
}

export default RegisterForm;