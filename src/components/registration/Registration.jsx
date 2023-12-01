import React,{useState} from 'react';
import './Registration.css'; // Import the CSS file

const Registration = () => {
    const [userRegistration, setuserRegistration] = useState({
        fullname: "",
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
        // gender: "",
    })

    const [records, setRecords] = useState([]);


    const handleInput = (e) => {
const name = e.target.name;
const value = e.target.value;
console.log(name,value);

setuserRegistration({...userRegistration, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(records)
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);
        console.log(records)

        setuserRegistration ({ username:"", fullname:"", email:"", phonenumber:"", password:"", confirmPassword:""})
    }
    return (
        <form action="" onSubmit={handleSubmit} className='form-body'>

<div className="inputGroup1">
                <h1>Registration</h1>
            </div>
            <div className="inputGroup1">
                <label htmlFor="fullname"></label>
               
            </div>
         
            <div className="inputGroup1">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder='Enter your name'
                value={userRegistration.fullname} onChange={handleInput}
              name='fullname'  id="fullname" />
            </div>
            <div className="inputGroup1">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Enter your username'
                value={userRegistration.username} onChange={handleInput}
               name='username' id="username" />
            </div>
            <div className="inputGroup2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter your email'
                value={userRegistration.email} onChange={handleInput}
               name='email' id="email" />
            </div>
            <div className="inputGroup2">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="number" placeholder='Enter your number'
                value={userRegistration.phonenumber} onChange={handleInput}
               name='phonenumber' id="phonenumber" />
            </div>
            <div className="inputGroup3">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter your password'
                value={userRegistration.password} onChange={handleInput}
               name='password' id="password" />
            </div>
            <div className="inputGroup3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder='Enter your confirm password'
                value={userRegistration.confirmPassword} onChange={handleInput}
               name='confirmPassword' id="confirmPassword" />
            </div>
            <div className="inputGroup4">
                <label>Gender</label>
                <div className="genderOptions">
                    <label htmlFor="male">
                        <input type="radio" id="male" name="gender" value="male" />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" id="female" name="gender" value="female" />
                        Female
                    </label>
                    <label htmlFor="other">
                        <input type="radio" id="other" name="gender" value="other" />
                        Prefer not to say
                    </label>
                </div>
                </div>
                <button type="submit">Register</button>
        </form>
    );
}

export default Registration;
