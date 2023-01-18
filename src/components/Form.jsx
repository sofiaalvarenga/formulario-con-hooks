import React from 'react';
    
const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    return(
        <form>
            <div className='data'>
                <label htmlFor='fistName'>First Name </label>
                <input type="text" onChange={onChange} name='firstName' />
            </div>
            <div className='data'>
                <label htmlFor='lastName'>Last Name </label>
                <input type="text" onChange={onChange} name ='lastName' />
            </div>
            <div className='data'>
                <label htmlFor='email'>Email </label> 
                <input type="text" onChange={onChange} name ='email'  />
            </div>
            <div className='data'>
                <label htmlFor='password'>Password </label>
                <input type="password" onChange={onChange}  name='password' />
            </div>
            <div className='data'>
                <label htmlFor='cpassword'> Confirm Password </label>
                <input type="password" onChange={onChange} name= 'cpassword'  />
            </div>
        </form>
    );
};
    
export default Form;
