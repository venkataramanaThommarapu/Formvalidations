import React, { useState } from "react"
import clsx from "clsx"
import styles from "./lgin.css"
import { useLoginFormValidator } from "./useLoginFormValidator"

const DoctorDashboard = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const { errors, validateForm, onBlurField } = useLoginFormValidator(form)

  const onUpdateField = (e) => {
    const field = e.target.name
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    }
    setForm(nextFormState)
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true })
    if (!isValid) return
    alert(JSON.stringify(form, null, 2))
  }

  return (
    <main>
      <div className='container-xl px-4 mt-5'>
        <div className='d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4'>
          <div className='me-4 mb-3 mb-sm-0'>
            <h1 className='mb-0'>Dashboard</h1>
          </div>
        </div>

        <div className='card card-waves mb-4 mt-5'>
          <div className='card-body p-5'>
            <div className='row align-items-center justify-content-center'>
              <div className='col'>
                <h2 className='text-primary'>Login Page Validations</h2>
                <form className='form' onSubmit={onSubmitForm}>
                  <div className='formGroup'>
                    <label className='formLabel'>Email</label>
                    <input
                      className={clsx(
                        styles.formField,
                        errors.email.dirty &&
                          errors.email.error &&
                          styles.formFieldError
                      )}
                      type='text'
                      aria-label='Email field'
                      name='email'
                      value={form.email}
                      onChange={onUpdateField}
                      onBlur={onBlurField}
                    />
                    {errors.email.dirty && errors.email.error ? (
                      <p className='formFieldErrorMessage'>
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                  <div className='formGroup'>
                    <label className='formLabel'>Password</label>
                    <input
                      className={clsx(
                        styles.formField,
                        errors.password.dirty &&
                          errors.password.error &&
                          styles.formFieldError
                      )}
                      type='password'
                      aria-label='Password field'
                      name='password'
                      value={form.password}
                      onChange={onUpdateField}
                      onBlur={onBlurField}
                    />
                    {errors.password.dirty && errors.password.error ? (
                      <p className='formFieldErrorMessage'>
                        {errors.password.message}
                      </p>
                    ) : null}
                  </div>

                  <div className='formActions'>
                    <button className='formSubmitBtn' type='submit'>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DoctorDashboard
