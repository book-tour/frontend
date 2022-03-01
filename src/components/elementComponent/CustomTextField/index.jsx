import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';



const CustomTextField = (props) => {

    console.log({ props });
    const { label, id, required, type, onChange, value } = props;

    const CssTextField = styled(TextField)({
        '&': {
            margin: '15px 0 5px 0',
        },
        '& input': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderRadius: '10px',
                color: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });


    return (
        <CssTextField label={label} required={required} type={type} />
    )
}

export default CustomTextField;
