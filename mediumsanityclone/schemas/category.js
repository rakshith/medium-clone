export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'timestamp',
      type: 'datetime',
      title: 'Timestamp',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'authors' }],
    },
  ],
}
