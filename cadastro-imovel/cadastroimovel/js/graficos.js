
      // Load the Visualization API and the corechart package.
      google.charts.load('current', 
      {'packages':['corechart','table','geochart','timeline'],
      "mapsApiKey": "AIzaSyB4yHLx_O8_u53_8oMYXb9V_8wDPaOVDCg"
     });

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawTable);
      google.charts.setOnLoadCallback(drawChartBarCol);
      google.charts.setOnLoadCallback(drawChartBar);
      google.charts.setOnLoadCallback(drawMarkersMap);
      google.charts.setOnLoadCallback(drawChartCrono);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'is3D':false,
                        'chartArea': {
                          // leave room for y-axis labels
                          width: '94%'
                        },
                        legend: {
                          position: 'top'
                        },
                        'width': '100%',

                       'titleTextStyle': {
                            color: '#727272',    // any HTML string color ('red', '#cc00cc')
                            fontName: 'Helvetica', // i.e. 'Times New Roman'
                            fontSize: 16, // 12, 18 whatever you want (don't specify px)
                            bold: true,    // true or false
                            italic: false   // true of false
                        },
                        'hAxis': 
                        {
                            textStyle: 
                            {
                                color: '#727272',
                                fontName: 'Helvetica', // i.e. 'Times New Roman'
                                fontSize: 16, // 12, 18 whatever you want (don't specify px)
                                bold: true,    // true or false
                                italic: false   // true of false
                            },
                            titleTextStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 16, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        },
                        'vAxis': {
                            textStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            },
                            titleTextStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        },
                        'legend': 
                        {
                            textStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        }
                    
                    };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_divPie'));
        chart.draw(data, options);
      }

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Bob',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }

      function drawChartBarCol() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}},
          chartArea: {
            // leave room for y-axis labels
            width: '60%',
            left: '10%'
          },
          legend: {
            position: 'top'
          },
          width: '100%',

         titleTextStyle: {
              color: '#727272',    // any HTML string color ('red', '#cc00cc')
              fontName: 'Helvetica', // i.e. 'Times New Roman'
              fontSize: 16, // 12, 18 whatever you want (don't specify px)
              bold: true,    // true or false
              italic: false   // true of false
          },
          hAxis: 
          {
              textStyle: 
              {
                  color: '#727272',
                  fontName: 'Helvetica', // i.e. 'Times New Roman'
                  fontSize: 16, // 12, 18 whatever you want (don't specify px)
                  bold: true,    // true or false
                  italic: false   // true of false
              },
              titleTextStyle: 
              {
                color: '#727272',
                fontName: 'Helvetica', // i.e. 'Times New Roman'
                fontSize: 16, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
                italic: false   // true of false
              }
          },
          vAxis: {
              textStyle: 
              {
                color: '#727272',
                fontName: 'Helvetica', // i.e. 'Times New Roman'
                fontSize: 12, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
                italic: false   // true of false
              },
              titleTextStyle: 
              {
                color: '#727272',
                fontName: 'Helvetica', // i.e. 'Times New Roman'
                fontSize: 12, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
                italic: false   // true of false
              }
          },
          legend: 
          {
              textStyle: 
              {
                color: '#727272',
                fontName: 'Helvetica', // i.e. 'Times New Roman'
                fontSize: 12, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
                italic: false   // true of false
              }
          }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_divCol'));
        chart.draw(data, options);
      }

      function drawChartBar() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {
                    'chartArea': {
                      // leave room for y-axis labels
                      width: '70%'
                    },
                    legend: {
                      position: 'top'
                    },
                    'width': '100%',
                     height: '100%',

                  'titleTextStyle': {
                        color: '#727272',    // any HTML string color ('red', '#cc00cc')
                        fontName: 'Helvetica', // i.e. 'Times New Roman'
                        fontSize: 16, // 12, 18 whatever you want (don't specify px)
                        bold: true,    // true or false
                        italic: false   // true of false
                    },
                    'hAxis': 
                    {
                        textStyle: 
                        {
                            color: '#727272',
                            fontName: 'Helvetica', // i.e. 'Times New Roman'
                            fontSize: 16, // 12, 18 whatever you want (don't specify px)
                            bold: true,    // true or false
                            italic: false   // true of false
                        },
                        titleTextStyle: 
                        {
                          color: '#727272',
                          fontName: 'Helvetica', // i.e. 'Times New Roman'
                          fontSize: 16, // 12, 18 whatever you want (don't specify px)
                          bold: true,    // true or false
                          italic: false   // true of false
                        }
                    },
                    'vAxis': {
                        textStyle: 
                        {
                          color: '#727272',
                          fontName: 'Helvetica', // i.e. 'Times New Roman'
                          fontSize: 12, // 12, 18 whatever you want (don't specify px)
                          bold: true,    // true or false
                          italic: false   // true of false
                        },
                        titleTextStyle: 
                        {
                          color: '#727272',
                          fontName: 'Helvetica', // i.e. 'Times New Roman'
                          fontSize: 12, // 12, 18 whatever you want (don't specify px)
                          bold: true,    // true or false
                          italic: false   // true of false
                        }
                    },
                    'legend': 
                    {
                        textStyle: 
                        {
                          color: '#727272',
                          fontName: 'Helvetica', // i.e. 'Times New Roman'
                          fontSize: 12, // 12, 18 whatever you want (don't specify px)
                          bold: true,    // true or false
                          italic: false   // true of false
                        }
                    }
                };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_divBar'));
        chart.draw(data, options);
      }

      
      function drawMarkersMap() {
        var data = google.visualization.arrayToDataTable([
            ['Cidade',   'Imóveis'],
            ['São Paulo',      45],
            ['Brasília',     4],
            ['Curitiba',    21],
            ['Pinhais',     2],
            ['Embu-guaçu',   1],
        ]);

        var options = {
            region: 'BR',
            resolution: 'provinces',
            displayMode: 'markers',
            colorAxis: {colors: ['green', 'blue']},
            enableRegionInteractivity: true,
            backgroundColor: '#D4E6F1',
            datalessRegionColor: '#85929E',
            defaultColor: '#f5f5f5',
            forceIFrame: false,
            tooltip: {
                    isHtml: true
                },
                'chartArea': {
                  // leave room for y-axis labels
                  width: '50%'
                },
                legend: {
                  position: 'top'
                },
                'width': '100%',

               'titleTextStyle': {
                    color: '#727272',    // any HTML string color ('red', '#cc00cc')
                    fontName: 'Helvetica', // i.e. 'Times New Roman'
                    fontSize: 16, // 12, 18 whatever you want (don't specify px)
                    bold: true,    // true or false
                    italic: false   // true of false
                },
                'hAxis': 
                {
                    textStyle: 
                    {
                        color: '#727272',
                        fontName: 'Helvetica', // i.e. 'Times New Roman'
                        fontSize: 16, // 12, 18 whatever you want (don't specify px)
                        bold: true,    // true or false
                        italic: false   // true of false
                    },
                    titleTextStyle: 
                    {
                      color: '#727272',
                      fontName: 'Helvetica', // i.e. 'Times New Roman'
                      fontSize: 16, // 12, 18 whatever you want (don't specify px)
                      bold: true,    // true or false
                      italic: false   // true of false
                    }
                },
                'vAxis': {
                    textStyle: 
                    {
                      color: '#727272',
                      fontName: 'Helvetica', // i.e. 'Times New Roman'
                      fontSize: 12, // 12, 18 whatever you want (don't specify px)
                      bold: true,    // true or false
                      italic: false   // true of false
                    },
                    titleTextStyle: 
                    {
                      color: '#727272',
                      fontName: 'Helvetica', // i.e. 'Times New Roman'
                      fontSize: 12, // 12, 18 whatever you want (don't specify px)
                      bold: true,    // true or false
                      italic: false   // true of false
                    }
                },
                'legend': 
                {
                    textStyle: 
                    {
                      color: '#727272',
                      fontName: 'Helvetica', // i.e. 'Times New Roman'
                      fontSize: 12, // 12, 18 whatever you want (don't specify px)
                      bold: true,    // true or false
                      italic: false   // true of false
                    }
                }
            };

        var chart = new google.visualization.GeoChart(document.getElementById('chart_divMap'));
        chart.draw(data, options);
       }
      
       function drawChartCrono() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

        // Set chart options
        var options = {'is3D':false,
                        'chartArea': {
                          // leave room for y-axis labels
                          width: '94%'
                        },
                        legend: {
                          position: 'top'
                        },
                        'width': '100%',

                       'titleTextStyle': {
                            color: '#727272',    // any HTML string color ('red', '#cc00cc')
                            fontName: 'Helvetica', // i.e. 'Times New Roman'
                            fontSize: 16, // 12, 18 whatever you want (don't specify px)
                            bold: true,    // true or false
                            italic: false   // true of false
                        },
                        'hAxis': 
                        {
                            textStyle: 
                            {
                                color: '#727272',
                                fontName: 'Helvetica', // i.e. 'Times New Roman'
                                fontSize: 16, // 12, 18 whatever you want (don't specify px)
                                bold: true,    // true or false
                                italic: false   // true of false
                            },
                            titleTextStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 16, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        },
                        'vAxis': {
                            textStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            },
                            titleTextStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        },
                        'legend': 
                        {
                            textStyle: 
                            {
                              color: '#727272',
                              fontName: 'Helvetica', // i.e. 'Times New Roman'
                              fontSize: 12, // 12, 18 whatever you want (don't specify px)
                              bold: true,    // true or false
                              italic: false   // true of false
                            }
                        }
                    
                    };
        chart.draw(dataTable, options);
      }



    window.addEventListener('resize', function(event) {
        drawChart();
        drawTable();
        drawChartBarCol();
        drawMarkersMap();
        drawChartBar();
        drawChartCrono();
    }, true);