 const loginReducer = (state = {}, action) => {
   if (action.type === 'SUBMIT') {
     const result = {
       name: action.name,
       password: action.password,
     };
     return result;
   }
   return state;
 };

 export default loginReducer;
