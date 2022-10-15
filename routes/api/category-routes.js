const router = require('express').Router();
// const e = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  Category.findAll({include: [{model: Product}]})
  .then((categoryData) => {
    res.status(200).json(categoryData);
  })
  .catch((err)=> res.json(err))
  
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id,{include: [{model: Product}]})
  .then((categoryData) => {
    res.status(200).json(categoryData);
  })
  .catch((err)=> res.json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
  .then((newCategory)=>{
    res.json(newCategory)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      category_id: req.params.id,
    }
  })
  .then((categoryUpdate)=>{
    res.status(200).json(categoryUpdate)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.id,
    }
  })
  .then((categoryDelete)=>{
    res.status(200).json(categoryDelete)
  })
  .catch((err)=>{
    res.json(err)
  })
});

module.exports = router;
