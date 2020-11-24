import React from 'react';

const Homepage = ()=>{
    return(
        <div>
            <header>
                <h4>Welcome to my review web application</h4>
            </header>

            <div className="jumbotron">
                <p>This web application was built as an interview test for Bimbi Philips Limited</p>
                <p>This was done in a hurry. So please be gentle with your scrutiny 🙏</p>
                <p>Thank you for your consideration</p>
                    <br/>
                <div>
                    <header>
                        <h4>Instructions</h4>
                    </header>

                    <p className="bg-white d-inline-block p-2">
                        To have full privileges, Login as an admin<br/>
                        email: admin@gmail.com<br/>
                        password: administrator
                    </p>

                    <header>
                        <h4>Features</h4>
                    </header>

                    <p>
                        <strong>Admin has the following privileges</strong> <br/>
                        Create Review (Admin Reviews will not need validation)<br/>
                        View Reviews <br/>
                        Discard / Validate Reviews <br/>
                        Login / Register <br/>
                    </p>

                    <p>
                        <strong>Users will have the following privileges</strong> <br/>
                        Create Review (User Reviews will be subject to validation by admin)<br/>
                        View Reviews <br/>
                        Login / Register 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Homepage