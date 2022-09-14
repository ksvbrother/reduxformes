
// import './App.css';

// import data from './data'
// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addData } from './action';
// function App({ addData, data }) {
//   return (
//     <div className="App">
//       <h1>Form VAlidation</h1>
//       <button onClick={addData}>add Data</button>
//     </div>
//   );
// }
// const mapStateToProps = (state) => ({ data: state.data })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addData: () => dispatch(addData)
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);





// import { reduxForm, Field } from 'redux-form';

// import { Component } from 'react';

// let SignInForm = props => {


//     const { handleSubmit } = props;

//     return <form className="form" onSubmit={handleSubmit} >
//         <div className="field">
//             <div className="control">
//                 <label className="label">First Name</label>
//                 <Field className="input" name="firstName" component="input" type="text" placeholder="First Name" />
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="label">Last Name</label>
//                 <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name" />
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="label">Email</label>
//                 <Field className="input" name="email" component="input" type="email" placeholder="Email Address" />
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="label">Proficiency</label>
//                 <div className="select">
//                     <Field className="input" name="proficiency" component="select">
//                         <option />
//                         <option value="beginner">Beginner Dev</option>
//                         <option value="intermediate">Intermediate Dev</option>
//                         <option value="expert">Expert Dev</option>
//                     </Field>
//                 </div>
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="label">Age</label>
//                 <Field className="input" name="age" component="input" type="number" placeholder="Age" />
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="checkbox">
//                     <Field name="saveDetails" id="saveDetails" component="input" type="checkbox" />
//                     Save Details
//                 </label>
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <label className="label">Message</label>
//                 <Field className="textarea" name="message" component="textarea" />
//             </div>
//         </div>

//         <div className="field">
//             <div className="control">
//                 <button className="button is-link">Submit</button>
//             </div>
//         </div>

//     </form>;
// };

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">

//                     <h1 className="App-title">Welcome to React x redux-form</h1>
//                 </header>
//                 <div className="container">
//                     <p className="App-intro">
//                         Contact Form
//                     </p>
//                     <SignInForm onSubmit={this.handleSignIn} />
//                 </div>
//             </div>
//         );
//     }


//     handleSignIn = values => {
//         console.log(values);
//     };


// }



// SignInForm = reduxForm({
//     form: 'signIn',
// })(SignInForm);

// export default App;




// import './App.css';
// import SelectingFormValuesForm from './FieldLevelValidationForm';

// function App() {
//     return (
//         <div className="App">
//             <SelectingFormValuesForm />
//         </div>
//     );
// }

// export default App;