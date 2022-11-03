import { FC } from 'react';
import tw from 'tailwind-styled-components';

interface GlosarioProps {
    color: string;
    title?: string;
    desc?: string;
};

const Glosario: FC<GlosarioProps> = ({ color, desc, title }) => {
    return (
        <Container>
            <Circulito color={color} />
            <Column>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Column>
        </Container>
    );
};

const Circulito = tw.span`
    h-4 w-4 rounded-full aspect-square
`.withStyle<{color: string}>(props => ({
    backgroundColor: props.color
}));

const Container = tw.div`
    flex items-center gap-2 bg-black/20 p-5 rounded-md h-16
`;
const Column = tw.div`flex flex-col items-start gap-[0.5px]`;

const Title = tw.h1`font-bold text-sm`;
const Desc = tw.p`text-xs text-gray-400`;

export default Glosario;
