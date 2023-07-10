import getRandomNumber from "../utils/getRandomNum"
import './style/FormSearch.css'



const FormSearch = ({setIdLocation})=> {

    const handleSubmit = (e)=>{

        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue === '' || inputValue === '0') {
            setIdLocation(getRandomNumber(126))
        }else{
            setIdLocation(inputValue)
        }
        
        e.target.inputId.value = ''
    }

    return(
        <>
            <form className="form__input" onSubmit={handleSubmit}>
                <input className='form__i' id='inputId' type="text" />
                <button className='form__buttom'>Search</button>
            </form>
        </>
    )
}

export default FormSearch