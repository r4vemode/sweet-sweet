import React, {useState} from "react";
import {submitOrderForm} from "../../../api/forms/order";
import {useForm} from "react-hook-form";
import styles from './OrderForm.module.css';
import InputMask from "react-input-mask"

const OrderForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [errorMask, setErrorMask] = useState(false)

    const isMaskFilled = (inputValue) => {
        const filledMaskRegex = /^(\+\d{1,3} )?\(\d{3}\) \d{3}-\d{2}-\d{2}$/
        return filledMaskRegex.test(inputValue)
    }

    const onSubmit = async (data) => {
        setErrorMask(false)
        setError('')
        setSuccess('')
        if (!isMaskFilled(data.phone)) return setErrorMask(true)

        try {
            setLoading(true)
            const result = await submitOrderForm(data)
            console.log(result)
            if ('success' in result && result.success) {
                setSuccess('Успешно отправлено')
                reset()
            }
            else {
                setError('Ошибка отправки. Попробуйте позже')
            }
        } catch (error) {
            console.error('Ошибка отправки:', error)
            setError('Ошибка отправки. Попробуйте позже')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form-container">
                <InputMask
                    mask={"+7 (999) 999-99-99"}
                    type={'tel'}
                    placeholder="Номер телефона"
                    className={errors.phone || errorMask ? styles.error : ''}
                    {...register("phone", { required: true })}
                />
                <button className="footer-btn" type={'submit'} disabled={loading}>Сделать заказ</button>
            </form>
            {error.length > 0 && success.length === 0 ? <p className={styles['error-text']}>{error}</p> : ''}
            {success.length > 0 && <p className={styles['success-text']}>{success}</p>}
        </>
    )
}

export default OrderForm