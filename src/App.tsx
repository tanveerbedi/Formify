import React from 'react';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <div className="container">
      <div className="form-container">
        <header className="form-header">
          <h1>Registration Form</h1>
          <p>Please fill out this form with the required information</p>
        </header>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="required">*</span></label>
            <input type="text" id="fullName" name="fullName" required autoComplete="name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number <span className="required">*</span></label>
            <input type="tel" id="contactNumber" name="contactNumber" required autoComplete="tel" />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address <span className="required">*</span></label>
            <textarea id="address" name="address" rows={3} required></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="companyName">Company Name <span className="required">*</span></label>
            <input type="text" id="companyName" name="companyName" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input type="email" id="email" name="email" required autoComplete="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="department">Department <span className="required">*</span></label>
            <div className="select-wrapper">
              <select id="department" name="department" required>
                <option value="" disabled selected>Select a department</option>
                <option value="hr">HR</option>
                <option value="sales">Sales</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label className="label-heading">Gender <span className="required">*</span></label>
            <div className="radio-group">
              <div className="radio-option">
                <input type="radio" id="male" name="gender" value="male" required />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio-option">
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radio-option">
                <input type="radio" id="notSay" name="gender" value="notSay" />
                <label htmlFor="notSay">Prefer not to say</label>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;