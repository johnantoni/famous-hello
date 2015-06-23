FamousFramework.scene('johnantoni:famous-typewriter', {
    behaviors: {
        '#parent': {
            'content': '<h1>Hello johnantoni:famous-typewriter!</h1>',
            'size': [500, 500],
            'position': [0, 0],
            'style': {
                'background-color': 'red',
                'font-family': 'georgia',
                'font-size': '0.75rem',
                'overflow': 'hidden',
                'word-wrap': 'break-word',
                'text-align': 'center',
                'color': 'white',
                'padding-bottom': '10px',
                'border-bottom': '1px solid white'
            }
        },
        '#child': {
          'content': '<div><img src="{{@nostromo.jpg}}"/></div>',
          'position': [25, 75],
          'scale': [0.5,0.5]
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function($state) {
              console.log("page loaded...");
            }
        },
        '#child': {
            'click': function($state, $payload) {
                 // get the 'clickCount' value (zero)
                 var oldValue = $state.get('clickCount');
                 // increment the counter by 5
                 $state.set('clickCount', oldValue + 1);
                console.log('clicked...' + $state.get('clickCount'));
            }
        }
    },
    states: {
        clickCount: 0 // will increment by 5 on a click
    },
    tree: '<node id="parent"><node id="child"></node></node>'
});
