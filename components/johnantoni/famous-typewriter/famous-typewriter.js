FamousFramework.scene('johnantoni:famous-typewriter', {
    behaviors: {
        '#surface': {
            'content': '<h1>Hello johnantoni:famous-typewriter!</h1>',
            'size': [200, 200],
            'style': {
                'background-color': 'red',
                'font-family': 'georgia',
                'font-size': '0.75rem',
                'overflow': 'hidden',
                'word-wrap': 'break-word'
            }
        }
    },

    tree: '<node id="surface"></node>'
});
