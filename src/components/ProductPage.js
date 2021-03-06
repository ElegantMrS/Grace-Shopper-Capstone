// Joe

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getAllMerchandise } from '../api';
import ProductCard from './ProductCard';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    display: "flex",
  },
  child: {
    flexDirection: "row",
  },
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

  return (
    <div>
    <span><h1>Pieces for Sale</h1></span>
    <div className={classes.root}>
        <div container className={classes.container} spacing={6}>
          {merchandise.map((product, index) => 
          <div className={classes.child}>
            <ProductCard key={index} product={product}></ProductCard>
          </div>
          )}
        </div>
    </div> 
    </div>
  );
}

export default ProductPage;