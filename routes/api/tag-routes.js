const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll()
    .then((tags) => {
      res.json(tags);
    })

});

router.get('/:id', (req, res) => {
  Tag.findByPk( req.params.id, {
    include: [{ model: Product}]
    })
  .then((tags)=>{
    res.status(200).json(tags)
  })
  .catch((err)=>{
    res.json(err)
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then((tagCreate)=>{
    res.status(200).json(tagCreate)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      tag_id: req.params.tag_id,
    }
  })
  .then((tagid)=>{
    res.status(200).json(tagid)
  })
  .catch((err)=>{
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      tag_id: req.params.id,
    }
  })
  .then((tagdelete)=>{
    res.status(200).json(tagdelete)
  })
  .catch((err)=>{
    res.json(err)
  })
});

module.exports = router;
