const PATHS = {
  component: {
    templates: {
      index: './templates/component/component.js',
      stories: './templates/component/component.stories.js'
    },
    dest: '../src/components'
  },
  page: {
    template: './templates/page.js',
    dests: {
      page: '../src/pages',
      template: '../src/templates'
    }
  }
};

function transformPropsString(props) {
  const objectify = prop => {
    let vals = prop.split(':');
    return { name: vals[0], value: vals[1] };
  };

  if (!props) {
    return;
  }

  return props.split(' ').map(objectify);
}

module.exports = plop => {
  /**
   * Component generator
   * Creates a new component under src/components
   */
  plop.setGenerator('component', {
    description: 'Scaffold a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'input',
        name: 'props',
        message: 'Props :: [prop]:[value]',
        filter: transformPropsString
      }
    ],
    actions: [
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/index.js`,
        templateFile: PATHS.component.templates.index
      },
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/styles.module.css`
      },
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/{{name}}.stories.js`,
        templateFile: PATHS.component.templates.stories
      }
    ]
  });

  /**
   * Page generator
   * Creates a new page under src/pages
   */
  plop.setGenerator('page', {
    description: 'Scaffold a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name'
      },
      {
        type: 'input',
        name: 'queryNode',
        message: 'Node to query'
      },
      {
        type: 'confirm',
        name: 'isTemplate',
        message: 'Is this a repeatable template?',
        default: false
      }
    ],
    actions: props => {
      const destDir = props.isTemplate
        ? PATHS.page.dests.template
        : PATHS.page.dests.page;

      return [
        {
          type: 'add',
          path: `${destDir}/{{name}}/index.js`,
          templateFile: PATHS.page.template
        },
        {
          type: 'add',
          path: `${destDir}/{{name}}/styles.module.css`
        }
      ];
    }
  });
};
