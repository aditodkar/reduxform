export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_EMAILID = 'SET_EMAILID';
export const SET_IBAN = 'SET_IBAN';
export const SET_BANKNAME = 'SET_BANKNAME';

export function setFirstName(firstname){
	return {
		type:SET_FIRSTNAME,
		payload:firstname
	}
}

export function setLastName(lastname){
	return {
		type:SET_LASTNAME,
		payload:lastname
	}
}

export function setEmailId(emailid){
	return {
		type:SET_EMAILID,
		payload:emailid
	}
}

export function setIban(iban){
	return {
		type:SET_IBAN,
		payload:iban
	}
}

export function setBankName(bankname){
	return {
		type:SET_BANKNAME,
		payload:bankname
	}
}
