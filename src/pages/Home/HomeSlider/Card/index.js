import {
    CardContainer,
    CardImg,
    HeadLine,
    ListContainer,
    ListItem,
    ArrowRight,
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
            </CardContainer>
        </>
    );
};

export default Card;