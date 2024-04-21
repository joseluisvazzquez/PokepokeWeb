import React, { useEffect, useState } from 'react';
import PokeData from './PokeData.json';
import{ Card, Container, Row, Col, ListGroup, Badge} from 'react-bootstrap';
interface Pokepoke{
    name: string;
    id: number;
    weight: string;
    abilities: string;
    Friendly: Boolean;
    imageUrl: string;
}
const PokeWeb: React.FC = () => {
    const [data, setData] = useState<Pokepoke[]>(PokeData);
    return(
        <Container fluid="md" className='mt-5'>
            <h1 className='display-2 mb-5 mx-3'>These are the five cuttest Pokemons!</h1>
            <Row>
                {data.map((Pokepoke, id) =>(
                    <Col key={id} sm={3}>
                        <Card className='shadow mt-3 mb-1'>
                            <Card.Body className='mt-3'>
                                <Card.Title>{Pokepoke.name}</Card.Title>
                                <ListGroup variant='dark' className='shadow-sm'>
                                    <ListGroup.Item>
                                        <Badge bg='danger'>Weight:</Badge> {Pokepoke.weight}
                                    </ListGroup.Item>
                                        
                                    <ListGroup.Item>
                                        <Badge bg='danger'>Abilities:</Badge> {Pokepoke.abilities}
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Badge bg='danger'>Is it friendly?</Badge> <p className='danger'>{Pokepoke.Friendly ? 'Yes!!' : 'No!!'}</p>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Img variant="top" src={Pokepoke.imageUrl} className='rounded'/>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    );

   
};
export default PokeWeb;
