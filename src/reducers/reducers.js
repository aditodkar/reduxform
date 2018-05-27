const userReducer = (state = {
  user:{
    firstname:'',
    lastname:'',
    emailid:'',
    bankaccounts:{
      iban:'',
      bankname:''
    }
  }
  }, action) => {

  switch (action.type) {
    case 'SET_FIRSTNAME':{
      return {
        ...state,
        user:{...state.user, firstname: action.payload}
      }
    }

    case 'SET_LASTNAME':{
      return {
        ...state,
        user:{...state.user, lastname: action.payload}
      }
    }

    case 'SET_EMAILID':{
      return {
        ...state,
        user:{...state.user, emailid: action.payload}
      }
    }

    case 'SET_IBAN':{
      return {
        ...state,
        user:{...state.user, iban: action.payload}
      }
    }

    case 'SET_BANKNAME':{
      return {
        ...state,
        user:{...state.user, bankname: action.payload}
      }
    }
    default: return state;
  }

}

export default userReducer;