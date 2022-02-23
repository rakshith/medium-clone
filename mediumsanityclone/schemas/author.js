export default {
  name: 'authors',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'profileImage',
      type: 'string',
      title: 'Profile Image',
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'posts' }],
        },
      ],
    },
  ],
}
