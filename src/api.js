import axios from "axios"

const api = axios.create({
  baseURL: "/api/",
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
})

export default api

export const getValidationErrors = (error) => (error?.response?.status === 400 && error.response.data) || {}
export const hasErrorCode = (errors, code) => !!errors && errors.some((error) => error.code === code)
