
// export const renderSelect = field => (
//     <div>
//         <select {...field.input} />

//         {field.touched && field.error && <div className="error">{field.error}</div>}
//     </div>
// );






// const required = value => value ? undefined : 'Required'

// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength10 = maxLength(10)

// const minValue = min => value =>
//     value && value.length < min ? `Must be at least ${min}` : undefined
// const minValue10 = minValue(10)




// function onlyNumberKey(evt) {

//     // Only ASCII character in that range allowed
//     var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//     if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//         return false;
//     return true;
// }




// // const renderNumber = (field) => (
// //     <div className="input-row">
// //         <input {...field.input} type="number" maxlength="10" />
// //     </div>
// // )




// const renderSelect = ({ select, label, type, meta: { touched, error, warning } }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...select} placeholder={label} type={type} />
//             {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )