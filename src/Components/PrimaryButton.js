import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    <PrimaryButton>Нормалбная кнобка</PrimaryButton>
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border: 1px solid #152842;
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: linear-gradient(180deg, #4D9FF0 0%, #36699D 100%);
        }
        &:active {
            background: #152842;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;