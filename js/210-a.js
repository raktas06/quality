window.onload = function () {
                var btn = document.getElementById("run"),
                    cd = document.getElementById("code"),
                    chart;

                (btn.onclick = function () {
                    var code = cd.value;

                    if (chart) {
                      chart.clean();
                    }

                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas', {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 2,
                      'maxWidth': 3,//ensures the flowcharts fits within a certian width
                      'line-length': 30,
                      'text-margin': 10,
                      'font-size': 12,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'Evet',
                      'no-text': 'Hayır',
                      'arrow-end': 'block',
                      'scale': 1,
                      'symbols': {
                        'start': {
                          'font-color': 'black',
                          'element-color': 'black',
                          'fill': 'white'
                        },
                        'end':{
                          'class': 'end-element'
                        }
                      },
                      'flowstate' : {
                        'past' : { 'fill' : '#ffffff', 'font-size' : 12},
                        'current' : {'fill' : '#ffffff', 'font-color' : 'black', 'font-weight' : 'normal'},
                        'future' : { 'fill' : '#ffffff'},
                        'request' : { 'fill' : '#ffffff'},
                        'invalid': {'fill' : '#ffffff'},
                        'approved' : { 'fill' : '#ffffff', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#ffffff', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                      }
                    });

                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
                })();

            };