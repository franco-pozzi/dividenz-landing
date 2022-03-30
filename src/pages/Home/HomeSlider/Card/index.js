import {
    CardContainer,
    CardImg,
    HeadLine,
    ListContainer,
    ListItem,
    ArrowRight,
    BtnWrapper,
    CardBtn,
} from './CardElements'


const Card = ({
    headline,
    textOne,
    textTwo,
    img,
}) => {
    return (
        <>
            <CardContainer>
                <CardImg src={img} />
                <HeadLine>{headline}</HeadLine>
                <ListContainer>
                    <ListItem><ArrowRight />{textOne}</ListItem>
                    <ListItem><ArrowRight />{textTwo}</ListItem>
                </ListContainer>
                <BtnWrapper>
                    <CardBtn to='/contacto'>Contactanos</CardBtn>
                </BtnWrapper>
            </CardContainer>
        </>
    );
};

export default Card;