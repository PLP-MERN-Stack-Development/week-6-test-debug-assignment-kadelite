const express = require('express');
const Post = require('../models/Post');
const authMiddleware = require('../../authMiddleware');

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// GET post by ID
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

// POST create new post (auth required)
router.post('/', authMiddleware, async (req, res) => {
  const { title, content, category } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  const post = await Post.create({
    title,
    content,
    category,
    author: req.user.id,
    slug: title.toLowerCase().replace(/\s+/g, '-')
  });
  res.status(201).json(post);
});

// PUT update post (auth required)
router.put('/:id', authMiddleware, async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

// DELETE post (auth required)
router.delete('/:id', authMiddleware, async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
});

module.exports = router; 