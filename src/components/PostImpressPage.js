// Joe

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { getAllMerchandise, getMerchandiseByCat } from '../api';
import ProductCard from './ProductCard';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  // container: {
  //   display: "grid",
  //   gridTemplateColumns
  // },
  child: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: 20
  }

});

const PostImpressPage = ({merchandise, setMerchandise}) => {

const classes = useStyles();


useEffect(() => {
    try {
        Promise.all([getMerchandiseByCat('post-impressionalism')])
        .then((data) => {
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
      <div container className={classes.container} 
      >
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

export default PostImpressPage;