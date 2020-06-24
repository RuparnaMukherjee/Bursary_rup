/*API SERVICES*/
import Global from 'store/Global';
import axios from 'axios';
const API = axios.create({ baseURL: Global.apiUrl });

const signup = async (name,email,password,confirmPassword,type)=>{
	let response = null
	await API.post('/signup', {
		name: name,
		email: email,
		password: password,
		confirmPassword: confirmPassword,
		type: type
	})
	.then(function (res) {
		response = res
	})
	.catch(function (error) {
		response = error.response
	})
	return handleResponse(response);
}

const login = async (email,password)=>{
	let response = null
	await API.post('/login', {
		email: email,
		password: password
	})
	.then(function (res) {
		response = res
	})
	.catch(function (error) {
		response = error.response
	})
	return handleResponse(response);
}

const resetPassword = async (email) => {
	let response = null
	await API.get('/reset-password', {
		params:{
			email: email
		}
	})
	.then(function (res) {
		response = res
	})
	.catch(function (error) {
		response = error.response
	})
	return handleResponse(response);
}

/* Utility Methods */

const handleResponse = response => {
	if(response.data===undefined){
		return {
			success: false,
			Error: JSON.stringify(response)
		}
	}
	else if(response.status === 202){
		return {
			success: false,
			Error: response.data.error
		}
	}
	else if(response.status === 401){
		window.location = "/";
		return {
			success: false,
			Error: JSON.stringify(response.data.error)
		}
	}
	else if(response.status !== 200){
		return {
			success: false,
			Error: JSON.stringify(response.data.error)
		}
	}
	return {
		success: true,
		data: response.data.data
	}
}

const api = {
  signup: signup,
  login: login,
  resetPassword: resetPassword
}

export {api as API}
