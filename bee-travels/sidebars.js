module.exports = {

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Microservices',
      items: [ 'about', 'designing'],
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
