// Joe

import React from 'react';
import { useEffect } from 'react';
import { getAllMerchandise } from '../api';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles({
//   root: {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     maxWidth: 345,
//     height: 'max-content'
//   },
  container: {
    height: 500,
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridTemplateRows: "100%",
    padding: 50
  },
  imageContainer: {
    display: "block",
    margin: "auto",
    height: 400,
    width: 400,
  },
  image: {
    gridColumn: 1,
    display: "block",
    margin: "auto",
    maxHeight: 400,
    maxWidth: 400
  },
  info: {
    gridColumn: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,    
    maxHeight: 400,
    maxWidth: 400
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center"
  }
  
});


    const ProductPage = ({merchandise, setMerchandise}) => {

        const classes = useStyles();
        
        
        useEffect(() => {
            try {
                Promise.all([getAllMerchandise()]).then((data) => {
                  setMerchandise(data[0]);
               }); 
            } catch (error) {
                console.log(error);
            }
        }, []);

        const addItemToCart = async (product) => {

            let cartItems = [];
        
            if (localStorage.getItem('cartItems')) {
                cartItems = JSON.parse(localStorage.getItem('cartItems'));
            }
            cartItems.push({
                artist: product.artist,
                cats: product.cats,
                'img_url': product.img_url,
                'merch_id': product.merch_id,
                name: product.name,
                price: product.price,
                rating: product.rating
            });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            console.log(cartItems);
        }
    
          return (
            <div>
                
                {/* Placeholder block with title or something */}
                    <div>
                        {merchandise.map((product, index) => 
                        <div key={index} className={classes.container} height="100%">
                            <div className={classes.imageContainer}>
                                <img src={product.img_url} className={classes.image}/>
                            </div>
    
                            <div className={classes.info}>
                            
                                <Typography gutterBottom constiant="h5" component="h2" padding="10">
                                    {product.name}
                                </Typography>
                                <Typography constiant="body2" color="textSecondary" component="p" padding="10">
                                    {product.artist}
                                </Typography>
                                <Typography constiant="body2" color="textSecondary" component="p" padding="10">
                                    {product.price}
                                </Typography>
                                <div className={classes.buttons}>
                                <Button type="" size="small" color="primary" onClick={() => addItemToCart(product)} >
                                    Add to Collection
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                
            </div>
          );
        }


export default ProductPage;