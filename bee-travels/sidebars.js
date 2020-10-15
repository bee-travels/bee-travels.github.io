module.exports = {

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Microservices',
      items: [ 'about', 'designing',{
        type: 'link',
        label: 'OpenAPI Comment Parser', 
        href: 'https://developer.ibm.com/technologies/api/blogs/document-apis-with-open-source-openapi-comment-parser/' 
      }],
    },
    {
      type: 'category',
      label: 'Runtime',
      items: ['node','python',],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: ['kube','openshift','istioabout','knativeabout']
      
    },
    {
      type: 'category',
      label: 'Life Cycle',
      items: ['tdd'],
    },
    'techtalks'

  ],
};
