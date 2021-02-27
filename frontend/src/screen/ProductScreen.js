import React, { useEffect }from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,  Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../component/Rating'
import Message from '../component/Message'
import Loder from '../component/Loder'
import {listProductDetails } from '../actions/productActions'


const ProductScreen = ({match}) => {
    const dispathch = useDispatch()
    
    const productDetails = useSelector(state=>state.productDetails)
    const {loading,error,product} = productDetails
     useEffect(()=>{
       dispathch(listProductDetails(match.params.id))
     },[dispathch, match])

    return (
        <>
          <Link className="btn btn-dark my-3" to="/">Go Back</Link>   
          {
              loading? (
                  <Loder />
              ):error?(
                <Message variant='danger'>{error}</Message>
              ):(
            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3> {product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating 
                        value={product.rating}
                        text = {`${product.numReviews}reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                         Price:{product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Descriptions:{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup.Item variant='flush'>
                        <Row>
                            <Col>Price:</Col>
                            <Col> <strong>{product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item variant='flush'>
                        <Row>
                            <Col>Status:</Col>
                            <Col> <strong>{product.countInStock>0 ?'In Stock': ' Out Of Stock'}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                   <ListGroup.Item variant='flush'>
                        <Button className="btn-block" type="button" disabled={product.countInStock===0 }>Add To Cart</Button>
                    </ListGroup.Item>
                </Card>

            </Col>
          </Row>
            )
        }  
    
        </>
    )
}

export default ProductScreen
